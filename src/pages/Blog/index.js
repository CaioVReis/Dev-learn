import {CardBlod} from '../../components/Card';
import Input from '../../components/input';


const Blog = () =>(
    <>

    <Input/>
    <div class="columns">
  
        
     <div class="column">
     <CardBlod  img="https://og-image.vercel.app/Hello%20World.png" description="Img" header="Aulas "/>
     </div>
     
     <div class="column">
     <CardBlod  img="https://og-image.vercel.app/Hello%20World.png" description="Img" header="Aulas"/>
     </div>

     <div class="column">
     <CardBlod  img="https://og-image.vercel.app/Hello%20World.png" description="Img" header="Aulas"/>
     </div>
     
     <div class="column">
     <CardBlod  img="https://og-image.vercel.app/Hello%20World.png" description="Img" header="Aulas"/>
     </div>
  
    </div>
    </>

)






export default Blog