import { useEffect, useState } from "react";
import "./CrudAtividades.css"; // mantém o mesmo padrão visual

export default function CrudUsuarios() {
  const [lista, setLista] = useState([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [editId, setEditId] = useState(null);

  const apiUrl = "https://ads2-2025-2-djcbfjadeparacd0.eastus-01.azurewebsites.net/api/Usuarios";
  const token = localStorage.getItem("token");

  useEffect(() => {
    carregarUsuarios();
  }, []); {/*Executa (carregarUsuarios) apenas uma vez assim que o componente é montado */}

  const carregarUsuarios = async () => {
    try {
      {/*Executa uma função get passando o token*/}
      const response = await fetch(apiUrl, { 
        headers: { Authorization: `Bearer ${token}` },
      });
      {/*Transforma o response em um objeto Javascript */}
      const data = await response.json();

      {/*Alimenta nosso estado lista[] */}
      setLista(data);
    } catch (error) {
      console.log("Erro ao carregar usuários:", error);
    }
  };


  {/*Função para editar um usuario */}
  const enviarFormulario = async (e) => {
    e.preventDefault();

    if (!nome || !email) { {/*Valida se tem email e nome*/}
      alert("Nome e e-mail são obrigatórios!");
      return;
    }

    {/*Monta o objeto para envio para o backend */}
    const dados = {
      Nome: nome,
      Email: email,
      Senha: senha || null,
    };

    {/*Executa a função PUT que atualiza o usuario em expecifico, passando (dados) como parametro e o token para autentificação de que é um admin que esta realizando a ação */}
    try {
      const response = await fetch(`${apiUrl}/${editId}`, {
        method: "PUT",
        body: JSON.stringify(dados), 
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Erro ao atualizar");

      alert("Usuário atualizado com sucesso!");
      resetarForm();
      carregarUsuarios();
    } catch (error) {
      alert("Erro ao atualizar usuário.");
    }
  };


  {/*Função deletar Usuario */}
  const deletarUsuario = async (id) => {
    if (!confirm("Deseja excluir este usuário permanentemente?")) return; {/*Confirmação para o delete */}

    try {
      await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      carregarUsuarios();
    } catch (error) {
      alert("Erro ao excluir.");
    }
  };

  const prepararEdicao = (user) => {
    setEditId(user.id);
    setNome(user.nome);
    setEmail(user.email);
    setSenha("");
  };

  const resetarForm = () => {
    setEditId(null);
    setNome("");
    setEmail("");
    setSenha("");
  };

  return (
    <div className="crud-container">
      <h2>Gerenciar Usuários</h2>

      {editId && (
        <form className="crud-form" onSubmit={enviarFormulario}>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Nova senha (opcional)"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit">Salvar Alterações</button>
          <button type="button" onClick={resetarForm}>Cancelar</button>
        </form>
      )}

      <h3>Lista de Usuários</h3>

      <ul className="crud-list">
        {lista.map((user) => (
          <li key={user.id} className="crud-item">
            <div>
              <h4>{user.nome}</h4>
              <p><b>Email:</b> {user.email}</p>
              <p>
                <b>Função:</b> {user.isAdmin ? "Administrador" : "Usuário"}
              </p>
            </div>

            <div className="crud-buttons">
              <button onClick={() => prepararEdicao(user)}>Editar</button>
              <button onClick={() => deletarUsuario(user.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
