import'../../components/Button/button.css'
import '../../index.css'
import './eventos.css'
import fundEventos from '../../assets/image/mainfund_eventos.png'
import exemploEvent from '../../assets/image/exemplo_evento.png'

function Eventos(){

    return (
        <main>
            <div>
                <img src={fundEventos} alt="Entrega de presentes a crianças" />
                <h1>EVENTOS</h1>
            </div>
    
            <section className='home-section3 home-eventos'>
                <article>
                    <h1>A Sopa Fraterna</h1>
                    <p>
                        Em todos os finais de semana, a Sopa Fraterna leva cerca de 2.500 refeições nutritivas às comunidades da Zona Sul e Norte de São Paulo. Nosso objetivo é ir além da alimentação, oferecendo pratos de alta qualidade que resgatam a dignidade e fazem com que cada pessoa se sinta acolhida e especial.
                    </p>
                </article>
                <img src={exemploEvent} alt="exemplo" />
            </section>

            <section className="facebook-bloco">
                <div className="facebook-left">
                <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Falmainstituto.oficial%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                    width="500"
                    height="500"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>

                </div>

                <div className="facebook-right">
                    <h1>Fique por dentro das novidades</h1>
                    <p>
                        Não perca nenhuma história de impacto! Siga o Instituto Alma e acompanhe em primeira mão os bastidores do Projeto Alimentar, as ações do Natal de Amor e como levamos dignidade às comunidades da Zona Leste e Norte de São Paulo.
                    </p>
                    <p className='destaque'>
                        A verdadeira mudança está em cada detalhe. Siga-nos!
                    </p>
                </div>
            </section>
        </main>
    );
}

export default Eventos;