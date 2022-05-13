import logo from './logo.svg';
import './App.scss';
import {Nav,Link} from './components/Nav';
import { PrimaryButton,LinkButton } from './components/buttons';
import  Card  from './components/Card';
import Footer from './components/footer';
import Input from './components/input';

const App = ()=>(
<>
  <Nav img="https://seeklogo.com/images/Z/Zelda-logo-687714F8A8-seeklogo.com.png">
  <div class="navbar-start">
  <Link label="Home"/>
  <Link label="Blog"/>
  <Link label="Contato"/>
  <Link label="PodCast"/>

  </div>
  <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <LinkButton label={ <strong>Sign up</strong>}/>
    
      
          <LinkButton label="log in" light={true}/>
           
        </div>
      </div>
    </div>
  

  </Nav>
  
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
    

<Footer/>
</>
 
)

export default App;
