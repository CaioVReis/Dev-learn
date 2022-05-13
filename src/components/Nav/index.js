import { useState } from "react"
const Nav = ({children,img}) =>{

    const [isActive,setIsActive] = useState(false)

    return(
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
<div class="navbar-brand">
  <a class="navbar-item" href="https://bulma.io">
    <img src={img} width="28" height="112"/>
  </a>

  <a role="button" onClick={()=>setIsActive(!isActive)} class={`navbar-burger ${isActive ? "is-active" : ""}` } aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
</div>

<div id="navbarBasicExample" class={`navbar-menu ${isActive ? "is-active" : ""}`}>{children}</div>
</nav>
    )}
    
const Link = ({label}) =>(
<a class="navbar-item">
{label}</a>
)

export default Nav
export{
    Link,
    Nav,

}