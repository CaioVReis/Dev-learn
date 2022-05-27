

const Select = ({label,name,onChange,error=false,options=['selecione uma opção']}) =>(<div class="field">
                       <label class="label">{label}</label>
                       <div class="control">
                           <div class="select is-fullwidth">
                               <select name={name} onChange={onChange}>
                               {options.map(value => <option value={value}>{value}</option> )}
                               </select>
                           </div>
                           {error &&
                           <label class="label has-text-danger">Campo {label} é obrigatorio</label>
                           }
                       </div>
                   </div> )
                   

                   


export default Select;