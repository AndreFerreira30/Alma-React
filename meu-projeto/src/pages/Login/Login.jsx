import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import "./Login.css";
import login_img from "../../assets/image/login_img.png";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [mensagemErro, setMensagemErro] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:7171/api/Usuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      // ❌ Login inválido
      if (!response.ok) {
        setMensagemSucesso("");
        setMensagemErro(data.message || "Credenciais inválidas.");
        return;
      }

      // ✅ Login OK
      setMensagemErro("");
      setMensagemSucesso("Login realizado com sucesso!");

      // --- SALVANDO USUÁRIO NO LOCALSTORAGE ---
      localStorage.setItem("token", data.token);
      localStorage.setItem("usuario", JSON.stringify(data.usuario));

      // Aguarda 1.5s antes de redirecionar
      setTimeout(() => {
        navigate("/doador");
        window.location.reload(); // força o Header atualizar
      }, 1500);

    } catch (error) {
      console.error(error);
      setMensagemSucesso("");
      setMensagemErro("Erro ao conectar ao servidor.");
    }
  };

  return (
    <main className="login-container">
      <div className="login-card">
        <div className="login-image">
          <img src={login_img} alt="Imagem de voluntário cozinhando" />
        </div>

        <div className="login-form">
          <h2>Login</h2>

          {/* Mensagens */}
          {mensagemErro && <p className="msg-erro">{mensagemErro}</p>}
          {mensagemSucesso && <p className="msg-sucesso">{mensagemSucesso}</p>}

          <form onSubmit={handleLogin}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />

            <a href="#" className="esqueceu-senha">Esqueci senha</a>

            <button type="submit" className="btn-entrar">Entrar</button>

            <p className="registro-texto">
              Não possui uma conta? <a href="/Cadastro">Registre-se</a>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
