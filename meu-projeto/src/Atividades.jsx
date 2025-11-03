import React from "react";
import './codigo_css/atividades.css'
import mainFundo from './assets/image/mainfund_atividades.png'
import atv1 from './assets/image/atv_exemplo1.png'
import atv2 from './assets/image/atv_exemplo2.png'
import atv3 from './assets/image/atv_exemplo3.png'
import atv4 from './assets/image/atv_exemplo4.png'


function Atividades(){

    return(
        <main>
            <div>
                <img src={mainFundo} alt="Sopão Comunitario" />
                <h1>ATIVIDADES</h1>
            </div>

            <section className='projeto projeto1'>
                <article>
                <h1>Projeto Alimentar</h1>
                    <p>
                        O Projeto Alimentar, iniciado em maio de 2017, é um dos pilares de combate à fome do Instituto Alma. Todos os sábados, nossos voluntários se reúnem para preparar e distribuir 2.500 refeições nutritivas e deliciosas em cinco comunidades carentes de São Paulo. Nosso objetivo vai além da nutrição; preparamos cada refeição com ingredientes de qualidade e muito carinho para que as pessoas se sintam especiais e valorizadas, levando esperança e sabor a quem vive em estado de pobreza extrema.
                    </p>
                </article>
                <img src={atv1} alt="Equipe de cozinha" />
            </section>

            <section className="projeto projeto2">                   
                <article>
                        <h1>Projeto Crê.Ser</h1>
                        <p>
                            O Projeto Crê.Ser foca no suporte integral à maternidade e à primeira infância. Nosso principal objetivo é oferecer carinho, afeto, informação e condições mínimas para uma gravidez saudável. Acompanhamos mulheres em situação de carência extrema desde o início da gestação até o sexto mês do bebê, oferecendo acompanhamento especializado e a entrega de enxoval completo, garantindo que as mães e os recém-nascidos tenham um início de vida com mais dignidade e saúde.
                        </p>
                </article>
                <img src={atv2} alt="Mãe com seu Bebê" />
            </section>


            <section className='projeto projeto3'>
                <article>
                <h1>Projeto Natal de Amor</h1>
                    <p>
                        O Projeto Natal de Amor transforma a véspera de Natal para cerca de 2.500 crianças. Montamos uma verdadeira "Loja de Brinquedos" onde as crianças carentes têm a oportunidade rara e digna de escolher livremente o presente que desejam ganhar. Esta ação de encanto proporciona momentos de alegria, empoderamento e magia, fortalecendo a esperança e garantindo que o Natal seja verdadeiramente especial para essas famílias.
                    </p>
                </article>
                <img src={atv3} alt="Entrega de presentes de natal" />
            </section>


            <section className="projeto projeto4">                  
                <article>
                        <h1>Armazém Fraterno</h1>
                        <p>
                            O Armazém Fraterno é uma das ações contínuas do Instituto Alma, essencial para o apoio direto às famílias nas cinco comunidades atendidas. Ele funciona como um ponto de apoio e distribuição, garantindo que as famílias em situação de vulnerabilidade tenham acesso constante a doações, cestas básicas e outros itens essenciais para sua sobrevivência e bem-estar, complementando a oferta de refeições semanais.
                        </p>
                </article>
                <img src={atv4} alt="Entrega de cestas básicas" /> 
            </section>


        </main>

    );
}

export default Atividades;