import React, { useState, useEffect } from "react";
import "../../index.css";
import "./transparencia.css";
import '../../components/Button/button.css';
import mainfundo from "../../assets/image/mainfund_transparencia.png";

const API_BASE_URL = "https://ads2-2025-2-djcbfjadeparacd0.eastus-01.azurewebsites.net"; 
const API_URL_TRANSPARENCIA = `${API_BASE_URL}/api/Transparencia`;

function Transparencia (){
    // 1. ESTADO: Armazenar a lista de documentos
    const [documentos, setDocumentos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    // 2. EFEITO: Chamar a API ao carregar o componente
   
    useEffect(() => {
        fetch(API_URL_TRANSPARENCIA)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // A API retorna uma lista de documentos.
                setDocumentos(data); 
                setLoading(false);
            })
            .catch(err => {
                console.error("Erro ao buscar documentos de transparência:", err);
                setError("Não foi possível carregar os balanços financeiros.");
                setLoading(false);
            });
    }, []);

    // 3. FUNÇÃO: Lidar com o clique do botão para iniciar o download
    const handleDownload = (docId) => {
        // A API de download é: /api/Transparencia/download/{id}
        const downloadUrl = `${API_URL_TRANSPARENCIA}/download/${docId}`;
        
        // Abre o link em uma nova janela para forçar o download
        window.open(downloadUrl, '_blank');
    };


    // 4. RENDERIZAÇÃO CONDICIONAL: Mensagens de estado
    if (loading) {
        return <main><div><h1>Carregando Balanços...</h1></div></main>;
    }

    if (error) {
        return <main><div><h1 style={{ color: 'red', textAlign: 'center' }}>{error}</h1></div></main>;
    }


    // 5. ESTRUTURA FINAL: Renderização dinâmica
    return(
        <main>
            <div>
                <img src={mainfundo} alt="Pessoa realizando calculos" />
                <h1>TRANSPARÊNCIA</h1>
            </div>

            <section className="mainsec">
                {/* 1. SEÇÃO COMPROMISSO (Estática) */}
                <section className="trans-conpromisso">
                    <article>
                        <h1>Nosso Compromisso</h1>
                        <p>O Instituto Alma adota práticas rigorosas de governança que privilegiam a transparência absoluta, disponibilizando informações detalhadas sobre suas ações e movimentação financeira. Isso garante a segurança e credibilidade da nossa ONG junto a doadores, parceiros, voluntários e as cerca de 1.000 famílias que auxiliamos</p>
                        <a href="/public/estatuto_instituto_alma.pdf"
                        download="estatuto_Instituto_Alma.pdf"
                        ><button>Nosso Estatuto</button></a>
                    </article>
                </section>
                
                {/* 2. SEÇÃO BALANÇO FINANCEIRO (Dinâmica) */}
                <section className="trans-balanco">
                    <h1>Balanço Financeiro</h1>
                    <div className="balanco-botoes-container">
                        {documentos.length === 0 ? (
                            <p style={{ textAlign: 'center', color: '#666' }}>Nenhum balanço financeiro publicado até o momento.</p>
                        ) : (
                            // Mapeia os documentos e cria um botão para cada um
                            documentos.map(doc => (
                                <button 
                                    key={doc.id} 
                                    onClick={() => handleDownload(doc.id)}
                                >
                                    {/* Usa o Título do documento como texto do botão (Ex: '2024') */}
                                    {doc.titulo} 
                                </button>
                            ))
                        )}
                    </div>
                </section>
            </section>
        </main>
    );
}

export default Transparencia;