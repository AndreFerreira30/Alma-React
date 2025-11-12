import React from "react";
import mainfundo from '../../assets/image/mainfund_sobrenos.png'
import exemplo from '../../assets/image/carousel4.png'
import principio1 from '../../assets/image/sobre_principios1.png'
import principio2 from '../../assets/image/sobre_principios2.png'
import principio3 from '../../assets/image/sobre_principios3.png'
import sobrePresidente from '../../assets/image/sobre_presidente.png'

import '../../index.css'
import './sobrenos.css'

function Sobrenos(){

    return(
        <main>
            <div>
                <img src={mainfundo} alt="foto da equipe de cozinha Alma" />
                <h1>SOBRE NOS</h1>
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

            <section className="secAcumulados">
                <h1>Resultados Acumulados Instituto Alma</h1>
                <p >Conheça nossos resultados em números:</p>
                <div className="acumulados">
                    <article>
                        <h2>2.500 <br />REFEIÇÕES <br /><span className="letraMinuscula">POR SEMANA</span></h2>
                    </article>

                    <article>
                        <h2>10.000 <br />REFEIÇÕES <br /><span className="letraMinuscula">POR MÊS</span></h2>
                    </article>
                    <article>
                        <h2>1.000 <br /> FAMILIAS <br /> <span className="letraMinuscula">ATENDIDAS</span></h2>
                    </article>
                </div>
            </section>

            <section className="secPrincipios">
                <h1>PRINCIPIOS</h1>
                <div>
                    <article>
                        <img src={principio1} alt="Icone de um avião" />
                        <h2>Missão</h2>
                        <p>
                            Promover a transformação social através de ações únicas e inesquecíveis que ofereçam dignidade, acolhimento e esperança a famílias e indivíduos em situação de vulnerabilidade.
                        </p>
                    </article>

                    <article>
                        <img src={principio2} alt="Um olho" />
                        <h2>Visão</h2>
                        <p>
                            Ser referência na promoção de mudanças sociais significativas, levando experiências especiais a comunidades carentes e isoladas nas zonas Norte e Leste de São Paulo.
                        </p>
                    </article>

                    <article>
                        <img src={principio3} alt="Icone de coração" />
                        <h2>Valores</h2>
                        <p>
                            Unicidade para momentos especiais; Ação Transformadora que muda vidas; e Acolhimento, Dignidade e Inclusão Social para todas as comunidades.
                        </p>
                    </article>
                </div>
            </section>

            <section className="secPresidente">
                <img src={sobrePresidente} alt="Presidente do istituto alma" />
        
                    <div className="textoPresidente">
                        <h1>PALAVRAS DO PRESIDENTE</h1>
                        <p>
                            "Nosso propósito no Instituto Alma vai além de suprir a carência material; é resgatar a dignidade humana. Acreditamos que todos merecem viver momentos de encantamento. Cada refeição que entregamos, cada presente que uma criança escolhe no Natal e cada enxoval para uma gestante são ações de amor. É um compromisso de impactar o coração de quem mais precisa, mostrando que a vida pode e deve ser especial, com apoio e solidariedade." <span className="textoDestaque"><br />Silvio Luiz Lemos Silva <br />Presidente do Instituto Alma</span>
                        </p>
                    </div>
            </section>
        </main>
    );
}

export default Sobrenos;