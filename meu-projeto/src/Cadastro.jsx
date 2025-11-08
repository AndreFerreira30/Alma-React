import React from "react";
import "./codigo_css/Cadastro.css";

// URL da imagem de exemplo (Pode ser uma importação local ou URL)
const IMAGE_URL = 'https://images.unsplash.com/photo-1594951119515-56434d3d8f8a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

function Cadastro() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cadastro em construção! (Dados não enviados)');
  };

  return (
    <main className="cadastro-main-container"> {/* Container opcional para centralizar */}
      <div className="cadastro-card">
        
        {/* 1. ADICIONE O CONTAINER DA IMAGEM */}
        <div 
          className="cadastro-card-image"
          style={{ backgroundImage: `url(${IMAGE_URL})` }} // O CSS anterior usa background-image
        >
          {/* Deixe vazio, a imagem é carregada pelo CSS */}
        </div>
        
        {/* 2. Seu formulário original */}
        <div className="cadastro-card-form">
          <h2>Cadastro</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="nome">Nome Completo</label>
              <input type="text" id="nome" name="nome" placeholder=" " required />
            </div>

            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" placeholder=" " required />
            </div>

            <div className="input-group">
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" name="senha" placeholder=" " required />
            </div>

            <div className="input-group">
              <label htmlFor="confirmarSenha">Confirmar Senha</label>
              <input type="password" id="confirmarSenha" name="confirmarSenha" placeholder=" " required />
            </div>

            <button type="submit" className="btn-cadastrar">Cadastrar</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Cadastro;