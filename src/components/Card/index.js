
import { LinkButton } from "../buttons"

const Card = ({img,description,duration,icon=""}) => (

 <div class="card">
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

export default Card