
import { useEffect,useState } from 'react';
import axios from 'axios';
import  Card  from '../../components/Card';
import Input from '../../components/input';



const Home = () =>{

 const [courses, setCourses] =useState([])

 useEffect(()=>{
   if(courses.length ===0){
     getCourses()
   }
 }
 )

 const search = (ev) =>{
   let word = ev.target.value;
   console.log(word)

   if(word.length > 0) {
     axios.get(`http://localhost:3000/courses?q=${word}`)
     .then (({ data }) =>{
       setCourses(data)
       word=""
     } )
    .catch(err => console.log("err", err))
   }
 }

 function getCourses(){
   axios.get("http://localhost:3000/courses")
        .then(({data})=>{ 
        setCourses(data)})
        .catch(err => console.log("err", err))
 }
      const Courses = courses.map(course => (
        <div class="column is-4">
          <Card img={course.thumbnail}
          description={course.description}
          duration={course.duration}
          icon='fa-solid fa-circle-play'/>
        </div>
  
  ))
      return(
    <>
    <Input onInput={search}/>
    <div class="columns is-multiline">
      {courses.length === 0 ? "loading..." : Courses} 
    </div>
    </>
)
      }
 
    

export default Home