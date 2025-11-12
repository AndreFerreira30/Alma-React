import React, { useEffect, useState } from "react";
import '../../index.css'
import '../Atividades/atividades.css'
import '../../components/Button/button.css'
import doadorBanner from '../../assets/image/doador1_img.png'
import doador2 from '../../assets/image/doador2.png'
import doador3 from '../../assets/image/doador3.png'
// import atv1 from '../../assets/image/atv_exemplo1.png'
// import atv2 from '../../assets/image/atv_exemplo2.png'
// import atv3 from '../../assets/image/atv_exemplo3.png'
// import atv4 from '../../assets/image/atv_exemplo4.png'

// function Doador(){
//     const [doador, setDoadores] = useState([]);

//     useEffect(() => {
//       fetch("http://localhost:3000/api/doadores") // backend rodando na porta 3000
//         .then((res) => res.json())
//         .then((data) => setDoadores(data))
//         .catch((err) => console.error(err));
//     }, []);



//     return(
//         <main>
//             <h1 className="doador-titulo">Lista de Usuários:</h1>
//             <section className="doador-lista">
//                  <ul>
//                     {doador.map((u,i) =>(
//                         <li key={i}>
//                             <div>Nome: {u.nome}</div> 
//                             <span>Email: {u.email}</span>
//                         </li>
//                     )
//                     )}
//                 </ul>  
//             </section>
//         </main>
//     )
// }
// export default Doador;

//REFAZENDO A TELA DE DOADOR, SE PRECISAR VOLTAR A ANTIGA SÓ COMENTAR O CÓDIGO ABAIXO E DESCOMENTAR O DE CIMA

function Doador(){

    return(
        <main>
            <div>
                <img src={doadorBanner} alt="foto da equipe de cozinha Alma" />
                <h1>Doar</h1>
            </div>

            <section className='home-section3 home-section3-sobre'>
                <article>
                <h1>Por Que Doar ao Instituto Alma?</h1>
                        <p>

                        No Instituto Alma, sua doação vai além do auxílio material; ela se transforma em dignidade, acolhimento e experiências únicas. Acreditamos que a verdadeira mudança acontece ao tocar o coração e levar a esperança a quem mais precisa.

                        </p>
                </article>
                <img src={doador2} alt="exemplo" />
            </section>

            <section className="secAcumulados">
                <h1>SUA DOAÇÃO É O MOTOR DA MUDANÇA! </h1>
                <p >Seu apoio é fundamental! É a sua generosidade que garante:</p>
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
                <h1>SUA DOAÇÃO É O MOTOR DA MUDANÇA! </h1>
                <p >Seu apoio é fundamental! É a sua generosidade que garante:</p>
                <div>
                    <article>
                        {/* <img src={doador3} alt="Icone de um avião" /> */}
                        <h2>Missão</h2>
                        <p>
                            Promover a transformação social através de ações únicas e inesquecíveis que ofereçam dignidade, acolhimento e esperança a famílias e indivíduos em situação de vulnerabilidade.
                        </p>
                    </article>

                    <article>
                        {/* <img src={principio2} alt="Um olho" /> */}
                        <h2>Visão</h2>
                        <p>
                            Ser referência na promoção de mudanças sociais significativas, levando experiências especiais a comunidades carentes e isoladas nas zonas Norte e Leste de São Paulo.
                        </p>
                    </article>

                    <article>
                        {/* <img src={principio3} alt="Icone de coração" /> */}
                        <h2>Valores</h2>
                        <p>
                            Unicidade para momentos especiais; Ação Transformadora que muda vidas; e Acolhimento, Dignidade e Inclusão Social para todas as comunidades.
                        </p>
                    </article>
                </div>
            </section>

            <section className="secPresidente">
                {/* <img src={sobrePresidente} alt="Presidente do istituto alma" /> */}
        
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

export default Doador;