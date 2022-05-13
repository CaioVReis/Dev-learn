

import  Card  from '../../components/Card';
import Input from '../../components/input';


const Home = () =>(
    <>
    <Input/>
    <div class="columns">
    <div class="column">
      <Card img="https://og-image.vercel.app/Hello%20World.png" description="teste" duration="10:20" icon="fa-solid fa-circle-play"/>
    </div>
    
    <div class="column">
      <Card img="https://og-image.vercel.app/Hello%20World.png" description="video" duration="15:20" icon="fa-solid fa-circle-play"/>
    </div>
    
    <div class="column">
      <Card img="https://og-image.vercel.app/Hello%20World.png" description="aula" duration="20:20" icon="fa-solid fa-circle-play"/>
    </div>
    
    <div class="column">
      <Card img="https://og-image.vercel.app/Hello%20World.png" description="classe" duration="11:20" icon="fa-solid fa-circle-play"/>
    </div>
    </div>
    </>
)

export default Home