import React from "react";
import "./codigo_css/Administrador.css";
import admin_img from './assets/image/admim_img.png'

function Administrador() {
    return (
      <main className="admim-container">
        <div className="admim-card">
          <div className="admim-image">
            <img src={admin_img} alt="Imagem de uma criança" />
          </div>
          <div className="admim-form">
            <h2>Login Administrativo</h2>
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
            </form>
          </div>
        </div>
      </main>
    );
  }

export default Administrador;
