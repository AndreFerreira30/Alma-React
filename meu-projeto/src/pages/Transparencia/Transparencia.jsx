import React from "react";
import "../../index.css"
import "./transparencia.css"
import'../../components/Button/button.css'
import mainfundo from "../../assets/image/mainfund_transparencia.png"


function Transparencia (){

    return(
        <main>
            <div>
                <img src={mainfundo} alt="Pessoa realizando calculos" />
                <h1>TRANSPARÊNCIA</h1>
            </div>

                <section className="mainsec">
                    <section className="trans-conpromisso">
                        <article>
                            <h1>Nosso Compromisso</h1>
                            <p>O Instituto Alma adota práticas rigorosas de governança que privilegiam a transparência absoluta, disponibilizando informações detalhadas sobre suas ações e movimentação financeira. Isso garante a segurança e credibilidade da nossa ONG junto a doadores, parceiros, voluntários e as cerca de 1.000 famílias que auxiliamos</p>
                            <button>Nosso Estatuto</button>
                        </article>
                    </section>
                    <section className="trans-balanco">
                        <h1>Balanço Financeiro</h1>
                        <div>
                            <button>2019</button>
                            <button>2020</button>
                            <button>2021</button>
                            <button>2022</button>
                            <button>2023</button>
                            <button>2024</button>
                        </div>
                    </section>
                </section>
          
        </main>

    );
}

export default Transparencia