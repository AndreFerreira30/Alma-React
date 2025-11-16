import React, { useState } from 'react';
import '../../index.css';
import './ouvidoria.css';
import '../../components/Button/button.css';
import fundOuvidoria from '../../assets/image/mainfund_ouvidoria.png';

const API_BASE_URL = 'https://localhost:7171'; 

function Ouvidoria (){
    // 1. Estados para capturar os dados do formulário
    const [email, setEmail] = useState('');
    const [titulo, setTitulo] = useState(''); 
    const [descricao, setDescricao] = useState('');
    const [status, setStatus] = useState(''); // Para feedback ao usuário
    const [loading, setLoading] = useState(false);
    
    // 2. Função para obter o token JWT
    const getAuthToken = () => {
        return localStorage.getItem("token"); // agora pega o token real salvo no login
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        const token = getAuthToken();
        if (!token) {
            setStatus('Erro: Você precisa estar logado para enviar uma ouvidoria.');
            setLoading(false);
            return;
        }

        // Seu backend usa [FromForm], então enviamos FormData
        const formData = new FormData();
        formData.append('Titulo', titulo);
        formData.append('Descricao', descricao);
        formData.append('EmailRemetente', email); 
        
        try {
            const response = await fetch(`${API_BASE_URL}/api/Ouvidoria`, {
                method: 'POST',
                // Incluindo o token de autorização no cabeçalho
                headers: {
                    'Authorization': `Bearer ${token}` 
                },
                body: formData, // Envia o formulário
            });
            
            setLoading(false);

            if (response.ok || response.status === 201) {
                setStatus('Mensagem de Ouvidoria enviada com sucesso!');
                // Limpar o formulário
                setEmail('');
                setTitulo('');
                setDescricao('');
            } else if (response.status === 401 || response.status === 403) {
                // 401 Unauthorized ou 403 Forbidden (se não for Admin ou o token for inválido)
                setStatus('Erro de Autorização: Você não é cadastrado ou sua sessão expirou. Faça login ou cadastre-se.');
            } else {
                const errorText = await response.text();
                setStatus(`Falha ao enviar: ${errorText || response.statusText}. Por favor, tente novamente.`);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            setLoading(false);
            setStatus('Erro de conexão com o servidor. Verifique sua rede.');
        }
    };


    return(
        <main>
            <div>
                <img src={fundOuvidoria} alt="Foto de ajuda comunitaria" />
                <h1>OUVIDORIA</h1>
            </div>

            <section className="ouvidoria">
                <section className="texto-ouvidoria">
                    <article>
                        <h1>Esclarecimento de Dúvidas </h1>
                        <p>
                            Valorizamos a sua confiança e transparência total. Para qualquer dúvida sobre a aplicação dos recursos, projetos ou sugestões, utilize o nosso canal de "Fale Conosco". Sua pergunta é fundamental para nós, e estamos prontos para lhe prestar todos os esclarecimentos necessários.
                        </p>
                        {/* Se o token não for encontrado, exibe um lembrete */}
                        {!getAuthToken() && (
                            <p style={{ color: 'blue', fontWeight: 'bold' }}>
                                Você precisa estar logado para enviar uma mensagem.
                            </p>
                        )}
                    </article>
                </section>

                {/* Formulário Integrado com o POST */}
                <section className="formulario_ouvidoria">
                    <h1>Fale Conosco</h1>
                    <form onSubmit={handleSubmit}>
                        
                        <input 
                            type="email" 
                            placeholder='Seu Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        {/* Título (necessário pelo DTO do backend) */}
                        <input 
                            type="text" 
                            placeholder='Título (Sugestão, Dúvida, Reclamação)'
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            required
                        />

                        {/* Descrição/Mensagem */}
                        <textarea 
                            placeholder="Descrição"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            required
                        ></textarea>
                        
                        <button type="submit" disabled={loading}>
                            {loading ? 'Enviando...' : 'Enviar'}
                        </button>
                    </form>
                    
                    {/* Feedback de Status */}
                    {status && <p style={{ marginTop: '15px', color: status.includes('sucesso') ? 'green' : 'red' }}>{status}</p>}

                </section>
                
            </section>
        </main>
    );
}

export default Ouvidoria;