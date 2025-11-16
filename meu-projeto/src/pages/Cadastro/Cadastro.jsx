import React, { useState } from "react";
import "./Cadastro.css";
import "../../components/Button/button.css";
import cadastro_img from "../../assets/image/cadastro_img.png";
import { useNavigate } from "react-router-dom";

const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;

function Cadastro() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nome: "",
        dataNascimento: "",
        endereco: "",
        email: "",
        senha: "",
        confirmarSenha: "",
    });

    const [passwordError, setPasswordError] = useState("");
    const [matchError, setMatchError] = useState("");

    const [apiError, setApiError] = useState("");
    const [apiSuccess, setApiSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (name === "senha" || name === "confirmarSenha") {
            setPasswordError("");
            setMatchError("");
        }

    setApiError("");
    setApiSuccess("");
  };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!PASSWORD_REGEX.test(formData.senha)) {
            setPasswordError(
                "A senha deve ter: 6+ caracteres, 1 maiúscula, 1 minúscula, 1 número e 1 caractere especial (!@#$%^&*)."
            );
            return;
        }

    if (formData.senha !== formData.confirmarSenha) {
      setMatchError("As senhas digitadas não coincidem.");
      return;
    }

    const { confirmarSenha, ...dataToSubmit } = formData;

    const enviarDados = async () => {
      try {
        const response = await fetch(
          "https://localhost:7171/api/Usuarios/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSubmit),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          setApiError(errorData.message || "Erro ao cadastrar usuário.");
          setApiSuccess("");
          return;
        }

        setApiSuccess("Cadastro realizado com sucesso!");
        setTimeout(() => {
            navigate("/login");
        }, 2000);
        
        setApiError("");

        setFormData({
          nome: "",
          dataNascimento: "",
          endereco: "",
          email: "",
          senha: "",
          confirmarSenha: "",
        });
      } catch (error) {
        setApiError("Erro ao conectar com o servidor.");
        setApiSuccess("");
      }
    };

    enviarDados();
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-card">
        <div className="cadastro-image">
          <img
            src={cadastro_img}
            alt="Imagem de voluntária segurando uma criança"
          />
        </div>

        <div className="cadastro-form">
          <h2>Cadastro</h2>

          <form onSubmit={handleSubmit}>
            <label>Nome Completo</label>
            <input
              type="text"
              placeholder="Digite seu nome completo"
              required
              name="nome"
              value={formData.nome}
              onChange={handleChange}
            />

            <label>Data de nascimento</label>
            <input
              type="date"
              required
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleChange}
            />

            <label>Endereço</label>
            <input
              type="text"
              placeholder="Digite seu endereço"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
            />

            <label>E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              required
              minLength={6}
              name="senha"
              value={formData.senha}
              onChange={handleChange}
            />

            {passwordError && (
              <p style={{ color: "yellow", fontSize: "0.8rem" }}>
                {passwordError}
              </p>
            )}

            <label>Confirmar Senha</label>
            <input
              type="password"
              placeholder="Confirme sua senha"
              required
              name="confirmarSenha"
              value={formData.confirmarSenha}
              onChange={handleChange}
            />

            {matchError && (
              <p style={{ color: "yellow", fontSize: "0.8rem" }}>
                {matchError}
              </p>
            )}

            <button type="submit">Cadastrar</button>

            {apiError && (
              <p style={{ color: "red", marginTop: "10px" }}>{apiError}</p>
            )}
            {apiSuccess && (
              <p style={{ color: "lightgreen", marginTop: "10px" }}>
                {apiSuccess}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
