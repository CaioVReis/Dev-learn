import logo from './logo.svg';
import './App.scss';
import {Nav,Link} from './components/Nav';
import { LinkButton } from './components/buttons';
import Footer from './components/footer';
import Blog from './pages/Blog'
import Contact from './pages/Contact';

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
  
 <Contact/>
    

<Footer/>
</>
 
)

export default App;
