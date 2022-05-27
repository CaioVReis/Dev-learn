
const TextArea = ({name,label, onInput , error = false ,  value = "", placeholder = ""}) =>(
<div class="field">
                       <label class="label">{label} *</label>
                       <div class="control">
                           <textarea name={name} class="textarea"  placeholder={placeholder} onInput={onInput} value={value} maxLength={1000}></textarea>
                       </div>
                       { error &&
                       <label class="label has-text-danger">Campo {name} é obrigatorio</label>
                       }
                   </div>


)


export default TextArea;






















