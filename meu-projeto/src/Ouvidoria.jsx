import './codigo_css/index.css'
import './codigo_css/transparencia.css'
import fundOuvidoria from './assets/image/mainfund_ouvidoria.png'


function Ouvidoria (){

    return(
        <main>
            <div>
                <img src={fundOuvidoria} alt="Foto de ajuda comunitaria" />
                <h1>OUVIDORIA</h1>
            </div>

            <section className="mainsec">
                <section className="trans-conpromisso">
                    <article>
                        <h1>Esclarecimento de Dúvidas </h1>
                        <p>
                            Valorizamos a sua confiança e transparência total. Para qualquer dúvida sobre a aplicação dos recursos, projetos ou sugestões, utilize o nosso canal de "Fale Conosco". Sua pergunta é fundamental para nós, e estamos prontos para lhe prestar todos os esclarecimentos necessários.
                        </p>
                    </article>
                </section>

                <section className="formulario_ouvidoria">
                    <h1>Fale Conosoco</h1>
                    <input type="email" name="" id=""  placeholder='Email'/>
                    <input type="text" placeholder='Descreva aqui' />
                    <button>Enviar</button>
                </section>
                
            </section>
        </main>
    );
}

export default Ouvidoria