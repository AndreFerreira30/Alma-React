import React, { useState } from "react";
import '../../index.css';
import '../Atividades/atividades.css';
import '../../components/Button/button.css';
import './Doador.css';

import doadorBanner from '../../assets/image/doador1_img.png';
import doac1 from '../../assets/image/doac-refeicoes.png';
import doac2 from '../../assets/image/doac-natal.png';
import doac3 from '../../assets/image/doac-materno.png';
import doador2 from '../../assets/image/doador2.png';

function Doador() {
    const [loading, setLoading] = useState(false);

    const fazerDoacao = async (valor) => {
        setLoading(true);
        try {
            const token = localStorage.getItem("token");

            const response = await fetch("https://ads2-2025-2-djcbfjadeparacd0.eastus-01.azurewebsites.net/api/doacao", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ valor })
            });

            if (!response.ok) {
                alert("Erro ao iniciar pagamento. Verifique login e tente novamente.");
                setLoading(false);
                return;
            }

            const data = await response.json();
            window.open(data.checkoutLink, '_blank');
        } catch (error) {
            console.error("Erro:", error);
            alert("Erro inesperado ao processar sua doação.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <main className="doador-container">

            <div className="doador-topo">
                <img src={doadorBanner} alt="foto da equipe de cozinha Alma" />
                <h1>Doar</h1>
            </div>

            <section className='home-section3 home-section3-sobre'>
                <article>
                    <h1>Por Que Doar ao Instituto Alma?</h1>
                    <p>
                        No Instituto Alma, sua doação vai além do auxílio material; ela se transforma em dignidade,
                        acolhimento e experiências únicas. Acreditamos que a verdadeira mudança acontece ao tocar o 
                        coração e levar a esperança a quem mais precisa.
                    </p>
                </article>
                <img src={doador2} alt="exemplo" />
            </section>

            <section className="secPrincipios secMudança">
                <h1>SUA DOAÇÃO É O MOTOR DA MUDANÇA!</h1>
                <p>Seu apoio é fundamental! É a sua generosidade que garante:</p>
                <div>
                    <article>
                        <img src={doac1} alt="Icone de uma cesta basica" /> 
                        <h2>10.000 Refeições por Mês</h2>
                        <p>Alimento nutritivo e preparado com carinho para famílias em 5 comunidades.</p>
                    </article>

                    <article>
                        <img src={doac2} alt="Presente de natal" /> 
                        <h2>Natal Inesquecível</h2>
                        <p>A chance de 2.500 crianças escolherem seus próprios presentes no Projeto Natal de Amor.</p>
                    </article>

                    <article>
                        <img src={doac3} alt="Mãe segurando um bebê" />
                        <h2>Acompanhamento Materno</h2>
                        <p>Suporte e enxovais para gestantes em extrema vulnerabilidade através do Projeto Crê.Ser.</p>
                    </article>
                </div>
            </section>

            <section className="sec-doacao-principal">
                <div className="conteudo-doacao-overlay">
                    <h1>Agora, sua doação transforma Vidas!</h1>
        
                    <div className="opcoes-doacao-container">
                        <article className="card-doacao">
                            <h3><span>R$ 50</span><br/>Garante 10 refeições nutritivas da Sopa Fraterna.</h3>
                            <button disabled={loading} onClick={() => fazerDoacao(50)}>Doe Agora</button>
                        </article>

                        <article className="card-doacao">
                            <h3><span>R$ 100</span><br/>Garante 20 refeições completas e nutritivas.</h3>
                            <button disabled={loading} onClick={() => fazerDoacao(100)}>Doe Agora</button>
                        </article>
            
                        <article className="card-doacao">
                            <h3><span>R$ 150</span><br/>Ajuda a custear o enxoval de um bebê no Projeto Crê.Ser.</h3>
                            <button disabled={loading} onClick={() => fazerDoacao(150)}>Doe Agora</button>
                        </article>
            
                        <article className="card-doacao">
                            <h3><span>R$ 300</span><br/>Apoia uma família com alimento por um mês.</h3>
                            <button disabled={loading} onClick={() => fazerDoacao(300)}>Doe Agora</button>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Doador;
