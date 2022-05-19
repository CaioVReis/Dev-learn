import { useState }  from "react"
import { LinkButton } from "../../components/buttons";
import InputText from "../../components/form/input";
const Contato = ()=>{ 

    const [form, setForm] = useState({
        name: "",
        email: ""
    })


    const setValue = (field,e) => setForm({...form, [field] : e.target.value})
    
    /*
    function setValue(field, e){
        setForm({...form, [field] : e.target.value})
    }
    */ 


    return (
    <>
   <section class="section">
       <div class="container">
           <div class="colunms is-centered">
               <div class="column is-half">
                   <h1 class="title ">Alguma Duvida?</h1>
                   <h2 class="subtitle ">Entre Em contato!</h2>
        
                   <InputText name="nome" label="Nome" value={form.name} placeholder="Digite seu nome" error={form.name.length <= 3 } onInput={(e) => setValue("name",e) } /> 
                 
                   <InputText name="email" label="Email" value={form.email} placeholder="Digite seu E-mail" error={form.email.split("@").length <= 1 } onInput={(e) => setValue("email",e) } /> 
        

                       <div class="field">
                       <label class="label">Assunto</label>
                       <div class="control">
                           <div class="select is-fullwidth">
                               <select name="Assunto" onChange={(e) => console.log(e.target.value)}>
                               <option value="Reportar Erro">Reportar Erro</option>
                               <option value="Outro">Outro</option>
                               </select>
                           </div>
                       </div>
                   </div> 

                   <div class="field">
                       <label class="label">Mensagem *</label>
                       <div class="control">
                           <textarea name="mensagem" class="textarea" placeholder="Deixe sua mensagem" maxLength={1000}></textarea>
                       </div>
                   </div>

                   <LinkButton label="Enviar" rounded={true}/>
               </div>
           </div>
       </div>
   </section>
   </>
   
)}

export default Contato;
    

