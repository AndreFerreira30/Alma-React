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
      const response = await fetch("https://ads2-2025-2-djcbfjadeparacd0.eastus-01.azurewebsites.net/api/Usuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      //Login inválido
      if (!response.ok) {
        setMensagemSucesso("");
        setMensagemErro(data.message || "Credenciais inválidas.");
        return;
      }

      // Exibe no console para garantir que IsAdmin veio corretamente
      console.log("USUÁRIO LOGADO:", data.usuario);

      // Limpa mensagens e confirma sucesso
      setMensagemErro("");
      setMensagemSucesso("Login realizado com sucesso!");

      // SALVANDO TOKEN & USUÁRIO 
      localStorage.setItem("token", data.token);

      // Garante que o campo IsAdmin exista corretamente no localStorage
      const usuarioFormatado = {
        id: data.usuario.id,
        nome: data.usuario.nome,
        email: data.usuario.email,
        isAdmin: data.usuario.isAdmin ?? data.usuario.IsAdmin ?? false
      };

      localStorage.setItem("usuario", JSON.stringify(usuarioFormatado));

      // Delay antes de navegar
      setTimeout(() => {
        if (usuarioFormatado.isAdmin) {
          navigate("/admin");
        } else {
          navigate("/doador");
        }
        window.location.reload(); // atualiza Header
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
