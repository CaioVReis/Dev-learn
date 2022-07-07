import { useEffect,useState } from 'react';
import axios from 'axios';
import  Card  from '../../components/Card';
import Input from '../../components/input';


const Blog = () =>{ 

    const [blogs, setBlog] = useState([])

    useEffect(()=>{
        if(blogs.length ===0){
            getBlog()
        
    }
}
)

const searsh = (ev) =>{
    let word = ev.target.value;
    console.log(word)

   if(word.length > 0){
       axios.get(`http://localhost:3000/blog?q=${word}`)
       .then (({ data}) =>{
           setBlog(data)
           word=""
           console.log(data)
       })
       .catch(err => console.log("err",err))
   }
   
}

function getBlog (){
    axios.get("http://localhost:3000/blog")
    .then(({data})=>{
    setBlog(data)})
    .catch(err => console.log("err",err))
    }
    const Blogs = blogs.map(blog => (
        <div class="column is-4">
            <Card img={blog.thumbnail}
            description={blog.description}
            header={blog.name}
            icon='fa-circle-play'/>
        </div>
    ))
     return(
   <>
     <Input onInput={searsh}/>
     <div class="columns is-multiline">
         {Blogs.length === 0 ? "loading..." : Blogs}
     </div>
   
   </>

     )
}








export default Blog