import React, { useState, useEffect } from 'react';
import '../../components/Button/button.css';
import '../../index.css';
import './eventos.css';
import fundEventos from '../../assets/image/mainfund_eventos.png';

// 🛑 A URL BASE DO SEU BACKEND FOI ATUALIZADA AQUI:
const API_BASE_URL = 'https://localhost:7171'; 

function Eventos() {
    const [eventos, setEventos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                // A chamada à API usa a nova URL base
                const response = await fetch(`${API_BASE_URL}/api/Eventos`); 
                
                if (!response.ok) {
                    throw new Error(`Erro HTTP! Status: ${response.status}`);
                }
                
                const data = await response.json();
                setEventos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEventos();
    }, []);

    if (loading) {
        return <main>Carregando eventos...</main>;
    }

    if (error) {
        return <main>Erro ao carregar os eventos: {error}</main>;
    }
    
    return (
        <main>
            <div>
                <img src={fundEventos} alt="Entrega de presentes a crianças" />
                <h1>EVENTOS</h1>
            </div>
            
            {/* Itera sobre a lista de eventos obtida da API */}
            {eventos.map((evento) => (
                <section key={evento.id} className='home-section3 home-eventos'>
                    <article>
                        <h1>{evento.titulo}</h1> 
                        <p>{evento.descricao}</p>
                        <p>
                            Informações: <br />
                            Local: {evento.localEvento} <br />
                            Data: {new Date(evento.dataEvento).toLocaleDateString('pt-BR')} <br />
                            Hora: {new Date(evento.dataEvento).toLocaleTimeString('pt-BR', { 
                                hour: '2-digit', 
                                minute: '2-digit' 
                            })}
                        </p>
                    </article>
                    {/* O caminho da imagem agora é construído com a nova URL base */}
                    <img 
                        src={`${API_BASE_URL}${evento.linkImagem}`} 
                        alt={evento.titulo} 
                    />
                </section>
            ))}

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