import React from "react";
import "./codigo_css/Login.css";

function Login() {
    return (
      <main className="login-container">
        <div className="login-card">
          <div className="login-image">
            {/* <img src={loginImage} alt="Imagem de voluntário cozinhando" /> */}
          </div>
  
          <div className="login-form">
            <h2>Login</h2>
            <form>
              <label>Email</label>
              <input type="email" placeholder="Digite seu email" required />
  
              <label>Senha</label>
              <input type="password" placeholder="Digite sua senha" required />
  
              <a href="#" className="esqueceu-senha">
                Esqueci senha
              </a>
  
              <button type="submit" className="btn-entrar">
                Entrar
              </button>
  
              <p className="registro-texto">
                Não possui uma conta? <a href="./Cadastro">Registre-se</a>
              </p>
            </form>
          </div>
        </div>
      </main>
    );
  }
  

export default Login;
