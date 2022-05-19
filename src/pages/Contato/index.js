
import { LinkButton } from "../../components/buttons";

const Contato = ()=>(
    <>
   <section class="section">
       <div class="container">
           <div class="colunms is-centered">
               <div class="column is-half">
                   <h1 class="title ">Alguma Duvida?</h1>
                   <h2 class="subtitle ">Entre Em contato!</h2>
                   <div class="field">
                       <label class="label">Nome</label>
                       <div class="control">
                           <input name="nome" class="input" type="text" placeholder="Nome"></input>
                       </div>
                   </div>
                   <div class="field">
                       <label class="label">Gmail</label>
                       <div class="control">
                           <input name="nome" class="input" type="text" placeholder="Gmail"></input>
                       </div>
                   </div>
                   
                   <div class="field">
                       <label class="label">Assunto</label>
                       <div class="control">
                           <div class="select is-fullwidth">
                               <select name="Assunto">
                               <option>Reportar Erro</option>
                               <option>Outro</option>
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
   
)

export default Contato;
    

