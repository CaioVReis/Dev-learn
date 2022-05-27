



const InputText =  ({name,label, onInput ,error = false ,  value = "", placeholder = ""}) => (
                   <div class="field">
                       <label class="label">{label}</label>
                       <div class="control">
                           <input name={name} onInput={onInput} value={value} class="input" type="text" placeholder={placeholder}></input>
                       </div>
                       { error &&
                       <label class="label has-text-danger">Campo {name} é obrigatorio</label>
                       }
                   </div>
 

)


export default  InputText
