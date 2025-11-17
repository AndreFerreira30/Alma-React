import React, { useState, useEffect } from "react";
import './atividades.css'
import '../../components/Button/button.css'
import mainFundo from '../../assets/image/mainfund_atividades.png'


const API_BASE_URL = "https://ads2-2025-2-djcbfjadeparacd0.eastus-01.azurewebsites.net";
const API_URL = `${API_BASE_URL}/api/Atividades`;

function Atividades(){
    // 1. ESTADO: Onde vamos armazenar as atividades vindas do C#
    const [atividades, setAtividades] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


// EFEITO: Chamar a API ao carregar o componente
    useEffect(() => {
        fetch(API_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setAtividades(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Erro ao buscar atividades:", err);
                setError("Não foi possível carregar as atividades. Verifique o console ou a API.");
                setLoading(false);
            });
    }, []);

    // 3. RENDERIZAÇÃO CONDICIONAL: Mensagens de estado
    if (loading) {
        return <main><div><h1>Carregando Atividades...</h1></div></main>;
    }

    if (error) {
        return <main><div><h1 style={{ color: 'red' }}>{error}</h1></div></main>;
    }


    // 4. ESTRUTURA FINAL: Renderização dinâmica
    return(
        <main>
            <div>
                <img src={mainFundo} alt="Sopão Comunitário - Fundo" />
                <h1>ATIVIDADES</h1>
            </div>

            {/* Itera sobre a lista de atividades obtida da API */}
            {atividades.map((atividade, index) => (
                <section 
                    key={atividade.id} 
                    className={`projeto projeto${(index % 4) + 1}`} 
                >
                    {/* Alterna a ordem de Artigo e Imagem */}
                    {(index % 2 === 0) ? (
                        <>
                            <article>
                                <h1>{atividade.titulo}</h1>
                                <p>{atividade.descricao}</p>
                            </article>
                            {/* O linkImagem virá do backend (Ex: /imagens_atividades/nome.jpg) */}
                            <img 
                                src={`${API_BASE_URL}${atividade.linkImagem}`} 
                                alt={atividade.titulo} 
                            />
                        </>
                    ) : (
                        <>
                            <img 
                                src={`${API_BASE_URL}${atividade.linkImagem}`} 
                                alt={atividade.titulo} 
                            />
                            <article>
                                <h1>{atividade.titulo}</h1>
                                <p>{atividade.descricao}</p>
                            </article>
                        </>
                    )}
                </section>
            ))}

            {/* Caso não haja atividades */}
            {atividades.length === 0 && (
                <section className="sem-atividades">
                    <p>Nenhuma atividade cadastrada no momento. Se você for Admin, cadastre uma!</p>
                </section>
            )}
        </main>
    );
}

export default Atividades;