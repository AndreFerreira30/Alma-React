import React, { useState } from "react"; // 1. IMPORTAÇÃO: Importado useState para gerenciar o estado do formulário.
import "./Cadastro.css";
import '../../components/Button/button.css'
import cadastro_img from '../../assets/image/cadastro_img.png'

// 2. CONSTANTE: Regex para forçar senha forte:
// - Pelo menos 6 caracteres no total (. {6,})
// - Pelo menos uma letra minúscula (?=.*[a-z])
// - Pelo menos uma letra maiúscula (?=.*[A-Z])
// - Pelo menos um número (?=.*\d)
// - Pelo menos um caractere especial (!@#$%^&*) (?=.*[!@#$%^&*])
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;

function Cadastro() {
    
    // 3. ESTADO: Estado para armazenar os dados dos inputs. Os nomes (chaves) devem bater com seu DTO em C#.
    const [formData, setFormData] = useState({
        Nome: '',
        DataNascimento: '',
        Endereco: '',
        Email: '',
        Senha: '',
        ConfirmarSenha: '', // Usado apenas para validação no Front-end
    });

    // 4. ESTADO: Estado para armazenar e exibir mensagens de erro
    const [passwordError, setPasswordError] = useState('');
    const [matchError, setMatchError] = useState('');

    // 5. FUNÇÃO: Atualiza o estado "formData" a cada digitação do usuário.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Limpar erros ao digitar novamente
        if (name === 'Senha' || name === 'ConfirmarSenha') {
            setPasswordError('');
            setMatchError('');
        }
    };

    // 6. FUNÇÃO: Lida com a submissão do formulário e validações.
    const handleSubmit = (e) => {
        e.preventDefault(); // Impede o comportamento padrão de recarregar a página.

        // --- VALIDAÇÃO DE SENHA FORTE ---
        if (!PASSWORD_REGEX.test(formData.Senha)) {
            setPasswordError('A senha deve ter: 6+ caracteres, 1 maiúscula, 1 minúscula, 1 número e 1 caractere especial (!@#$%^&*).');
            return; // Impede o envio se a senha for fraca
        } else {
            setPasswordError(''); // Limpa o erro se for válida
        }

        // --- VALIDAÇÃO DE CONFRONTAÇÃO DE SENHA ---
        if (formData.Senha !== formData.ConfirmarSenha) {
            setMatchError('As senhas digitadas não coincidem.');
            return; // Impede o envio se as senhas não baterem
        } else {
            setMatchError(''); // Limpa o erro se baterem
        }

        // 7. AÇÃO PÓS-VALIDAÇÃO (Simulação)
        const { ConfirmarSenha, ...dataToSubmit } = formData; // Remove 'ConfirmarSenha' antes de enviar ao servidor
        
        console.log("Validações OK. Dados prontos para envio ao servidor C#:", dataToSubmit);
        
        // *******************************************************************
        // * PRÓXIMO PASSO: Implementar a chamada fetch/axios para o endpoint *
        // * '/register' do seu controller C#.                               *
        // *******************************************************************
    };

    return (
        <div className="cadastro-container">
          <div className="cadastro-card">
          <div className="cadastro-image">
            <img src={cadastro_img} alt="Imagem de voluntária segurando uma criança" />
          </div>
            <div className="cadastro-form">
              <h2>Cadastro</h2>
              {/* 8. FORMULÁRIO: Adicionado o manipulador de submissão */}
              <form onSubmit={handleSubmit}> 
                <label>Nome Completo</label>
                {/* 9. INPUTS: Adicionado name, value e onChange em todos os campos */}
                <input 
                    type="text" 
                    placeholder="Digite seu nome completo" 
                    required 
                    name="Nome" 
                    value={formData.Nome} 
                    onChange={handleChange}
                />

                <label>Data de nascimento</label>
                <input 
                    type="date" 
                    required 
                    max="2007-11-13" 
                    min="1925-11-13"
                    name="DataNascimento" // Deve bater com o campo 'DataNascimento' no DTO C#
                    value={formData.DataNascimento} 
                    onChange={handleChange}
                />

                <label>Endereço</label>
                <input 
                    type="text" 
                    placeholder="Digite seu endereço"
                    name="Endereco" // Deve bater com o campo 'Endereco' no DTO C#
                    value={formData.Endereco} 
                    onChange={handleChange}
                />

                <label>E-mail</label>
                <input 
                    type="email" 
                    placeholder="Digite seu e-mail" 
                    required
                    name="Email" // Deve bater com o campo 'Email' no DTO C#
                    value={formData.Email} 
                    onChange={handleChange}
                />
        
                <label>Senha</label>
                <input 
                    type="password" 
                    placeholder="Digite sua senha" 
                    required 
                    minLength={6} // O minLength do HTML ajuda, mas a Regex é mais segura
                    name="Senha" // Deve bater com o campo 'Senha' no DTO C#
                    value={formData.Senha} 
                    onChange={handleChange}
                />
                {/* 10. EXIBIÇÃO DE ERROS: Mostra o erro de força de senha */}
                {passwordError && <p style={{ color: 'yellow', fontSize: '0.8rem' }}>{passwordError}</p>}
        
                <label>Confirmar Senha</label>
                <input 
                    type="password" 
                    placeholder="Confirme sua senha" 
                    required
                    name="ConfirmarSenha" // Usado para a comparação no front-end
                    value={formData.ConfirmarSenha} 
                    onChange={handleChange}
                />
                {/* 10. EXIBIÇÃO DE ERROS: Mostra o erro de senhas não coincidentes */}
                {matchError && <p style={{ color: 'yellow', fontSize: '0.8rem' }}>{matchError}</p>}
        
                <button type="submit">Cadastrar</button>

            
              </form>
            </div>
          </div>
        </div>
      );
    }
    
export default Cadastro;