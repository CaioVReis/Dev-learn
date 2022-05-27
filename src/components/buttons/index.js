const Button = ({label,light=false,className, onClick = false,rounded=false,icon=""}) =>(
    <button onClick={onClick} class={`button ${className} ${light ? "is-light" :""} ${rounded ? "is-rounded" :""}`}>
        {icon!=="" ?
         <span class="icon">
            <i class={icon}></i>
        </span>:""}
        <span>{label}</span>
       </button>
)


const PrimaryButton = ({label,light=false,onClick = false,rounded=false,icon=""}) => (
<Button onClick={onClick} className="is-primary" label={label} light={light} rounded={rounded} icon={icon}/>
)

const LinkButton = ({label,light=false,onClick,rounded=false,icon=""}) =>(
    <Button label={label}  onClick={onClick} light={light} rounded={rounded} icon={icon} className={'is-link'}/>
    

)

const InfoButton = ({label,onClick,light=false,rounded=false,icon=""}) =>(
    <Button label={label}  onClick={onClick} light={light} rounded={rounded} icon={icon} className={'is-info'}/>
)

const SuccessButton = ({label,onClick,light=false,rounded=false,icon=""}) =>(
    <Button label={label}  onClick={onClick} light={light} rounded={rounded} icon={icon} className={'is-Success'}/>
)

const WarningButton = ({label,onClick,light=false,rounded=false,icon=""}) =>(
    <Button label={label}  onClick={onClick} light={light} rounded={rounded} icon={icon} className={'is-Warning'}/>
)

const DangerButton = ({label,onClick,light=false,rounded=false,icon=""}) =>(
    <Button label={label}  onClick={onClick} light={light} rounded={rounded} icon={icon} className={'is-Danger'}/>
)

export{
    Button,
    PrimaryButton,
    LinkButton,
    InfoButton,
    SuccessButton,
    WarningButton,
    DangerButton,
}


