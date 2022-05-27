import { useState }  from "react"
import { InfoButton, Button , LinkButton } from "../../components/buttons";
import InputText from "../../components/form/input";
import Select from "../../components/form/select";
import TextArea from "../../components/form/textarea";
const Contact = ()=>{ 

    const [form, setForm] = useState({
        name: "",
        email: "",
        message:"",
    })


    const setValue = (field,e) => setForm({...form, [field] : e.target.value})
    const send = ()=> console.log("data",JSON.stringify(form))
    
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
        

                       <Select label='Contato' name='contact' options={['reportar erro','trabalhe conosco']} onChange={(e) => setValue('contact',e) }/>

                   <TextArea name="message" label="Mensagem" value={form.message} placeholder="Digite Sua Duvida" error={form.message.length <= 10 } onInput={(e) => setValue("message",e) } />

                   <LinkButton label="Enviar" rounded={true} onClick={send}/>
               </div>
           </div>
       </div>
   </section>
   </>
   
)}

export default Contact;
    

