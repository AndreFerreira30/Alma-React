import './codigo_css/index.css'
import './codigo_css/eventos.css'
import fundEventos from './assets/image/mainfund_eventos.png'

function Eventos(){

    return (
        <main>
            <div>
                <img src={fundEventos} alt="Entrega de presentes a crianças" />
                <h1>EVENTOS</h1>
            </div>
    
            <section className='home-section3 home-section3-sobre'>
                <article>
                    <h1>Nossa Instituição</h1>
                    <p>
                        O Instituto Alma é uma organização sem fins lucrativos com mais de 18 anos de atuação em São Paulo. Nossa essência é promover a transformação social através de ações diferenciadas, com o propósito de encantar e proporcionar experiências únicas e significativas na vida de pessoas em situação de vulnerabilidade, oferecendo dignidade e esperança. Atuamos prioritariamente nas comunidades carentes e isoladas das zonas Norte e Leste da capital, levando a convicção de que todos merecem viver momentos especiais.
                    </p>
                </article>
                <img src={exemplo} alt="exemplo" />
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
                    <p>Não perca nenhuma história de impacto! Siga o Instituto Alma e acompanhe em primeira mão os bastidores do Projeto Alimentar, as ações do Natal de Amor e como levamos dignidade às comunidades da Zona Leste e Norte de São Paulo.
A verdadeira mudança está em cada detalhe. Siga-nos!</p>
                </div>
            </section>
        </main>
    );
}

export default Eventos;