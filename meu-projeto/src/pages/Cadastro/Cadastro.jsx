import React from "react";
import "./Cadastro.css";
import '../../components/Button/button.css'
import cadastro_img from '../../assets/image/cadastro_img.png'

function Cadastro() {
  return (
        <div className="cadastro-container">
          <div className="cadastro-card">
          <div className="cadastro-image">
            <img src={cadastro_img} alt="Imagem de voluntária segurando uma criança" />
          </div>
            <div className="cadastro-form">
              <h2>Cadastro</h2>
              <form>
                <label>Nome Completo</label>
                <input type="text" placeholder="Digite seu nome completo" />
    
                <label>E-mail</label>
                <input type="email" placeholder="Digite seu e-mail" />
    
                <label>Senha</label>
                <input type="password" placeholder="Digite sua senha" />
    
                <label>Confirmar Senha</label>
                <input type="password" placeholder="Confirme sua senha" />
    
                <button type="submit">Cadastrar</button>

            
              </form>
            </div>
          </div>
        </div>
      );
    }
    
export default Cadastro;
