

const PrimaryButton = ({label,light=false,rounded=false,icon=""}) =>(
    <button class={`button is-primary ${light ? "is-light" :""} ${rounded ? "is-rounded" :""}`}>
        {icon!=="" ?
         <span class="icon">
            <i class={icon}></i>
        </span>:""}
        <span>{label}</span>
        </button>
)

const LinkButton = ({label,light=false,rounded=false,icon=""}) =>(
    <button class={`button is-link ${light ? "is-light" : ""} ${rounded ? "is-rounded" : ""}`}>
        {icon!=="" ?
        <span class="icon">
            <i class={icon}></i>
        </span>:""}
        <span>{label}</span>
        </button>

)

const InfoButton = ({label,light=false,rounded=false}) =>(
    <button class={`button is-info ${light ? "is-light" : ""} ${rounded ? "is-rounded" : ""}`}>{label}</button>
)

const SuccessButton = ({label,light=false,rounded=false}) =>(
    <button class={`button is-sucess ${light ? "is-light" :""} ${rounded ? "is-rounded" : ""}`}>{label}</button>
)

const WarningButton = ({label,light=false,rounded=false}) =>(
    <button class={`button is-warning ${light ? "is-light" :""} ${rounded ? "is-rounded" : ""}`}>{label}</button>
)

const DangerButton = ({label,light=false,rounded=false}) =>(
    <button class={`button is-danger ${light ? "is-light" :""} ${rounded ? "is-rounded" : ""}`}>{label}</button>
)

export{
    PrimaryButton,
    LinkButton,
    InfoButton,
    SuccessButton,
    WarningButton,
    DangerButton,
}


