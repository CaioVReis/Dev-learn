
import { LinkButton } from "../buttons"

const Card = ({img,description,duration,icon="", header=""}) => (

 <div class="card">
   {header !== "" && 
   <header class="card-header">
   <p class="card-header-title">
     {header}
   </p>
   <button class="card-header-icon" aria-label="more options">
     <span class="icon">
       <i class="fas fa-angle-down" aria-hidden="true"></i>
     </span>
   </button>
 </header>
   }
<div class="card-image">
  <figure class="image is-4by3">
    <img src={img} alt="Placeholder image"/>
  </figure>
</div>
<div class="card-content">{description}</div>
<footer class="card-footer">
    <div class="card-footer-item">
        <LinkButton label="Assista" rounded={true} icon={icon} />
    </div>

    <div class="card-footer-item">
        <p>{duration}</p>
    </div>

    </footer>
</div>
)




const CardBlod = ({img,description,header=""}) => (

  <div class="card">
    {header !== "" && 
    <header class="card-header">
    <p class="card-header-title is-centered">
      {header}
    </p>
  </header>
    }
 <div class="card-image">
   <figure class="image is-4by3">
     <img src={img} alt="Placeholder image"/>
   </figure>
 </div>
 <div class="card-content">{description}</div>
 <footer class="card-footer">
     <div class="card-footer-item">
         <LinkButton label="Ler" rounded={true} icon="fa-brands fa-readme"/>
     </div>
 
     <div class="card-footer-item">
     <LinkButton label="Compartilhar" rounded={true} light={true} icon="fa-solid fa-share-from-square"/>
     </div>
 
     </footer>
 </div>
 )

export {CardBlod}
export default Card


