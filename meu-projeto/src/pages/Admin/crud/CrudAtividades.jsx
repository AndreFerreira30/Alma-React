import { useEffect, useState } from "react";
import "./CrudAtividades.css";

export default function CrudAtividades() {
  const [atividades, setAtividades] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState(null);
  const [editId, setEditId] = useState(null);
  
  const apiUrl = "https://ads2-2025-2-djcbfjadeparacd0.eastus-01.azurewebsites.net/api/Atividades"; 
  const token = localStorage.getItem("token");

  useEffect(() => {
    listarAtividades();
  }, []);

  const listarAtividades = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setAtividades(data);
    } catch (error) {
      console.log("Erro ao carregar atividades:", error);
    }
  };

  const enviarFormulario = async (e) => {
    e.preventDefault();
    if (!titulo || !descricao || (!imagem && !editId)) {
      alert("Preencha todos os campos!");
      return;
    }

    const formData = new FormData();
    formData.append("Titulo", titulo);
    formData.append("Descricao", descricao);
    if (imagem) formData.append("ImagemArquivo", imagem);

    try {
      const method = editId ? "PUT" : "POST";
      const url = editId ? `${apiUrl}/${editId}` : apiUrl;

      const response = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });

      if (!response.ok) throw new Error("Erro ao salvar");

      alert(editId ? "Atualizado com sucesso!" : "Criado com sucesso!");
      resetarForm();
      listarAtividades();
    } catch (error) {
      console.log("Erro ao salvar:", error);
      alert("Erro ao salvar, verifique!");
    }
  };

  const deletarAtividade = async (id) => {
    if (!confirm("Deseja realmente excluir?")) return;

    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) throw new Error("Erro ao remover");

      listarAtividades();
    } catch (error) {
      console.log("Erro ao deletar:", error);
    }
  };

  const prepararEdicao = (atividade) => {
    setEditId(atividade.id);
    setTitulo(atividade.titulo);
    setDescricao(atividade.descricao);
  };

  const resetarForm = () => {
    setEditId(null);
    setTitulo("");
    setDescricao("");
    setImagem(null);
  };

  return (
    <div className="crud-container">
      <h2>Gerenciar Atividades</h2>

      <form className="crud-form" onSubmit={enviarFormulario}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        ></textarea>

        <input
          type="file"
          accept=".jpg,.png"
          onChange={(e) => setImagem(e.target.files[0])}
        />

        <button type="submit">{editId ? "Atualizar" : "Criar"}</button>
        {editId && <button type="button" onClick={resetarForm}>Cancelar</button>}
      </form>

      <h3>Lista de atividades</h3>
      <ul className="crud-list">
        {atividades.map((atv) => (
          <li key={atv.id} className="crud-item">
            <img src={atv.linkImagem} alt="Imagem" className="thumb" />
            <div>
              <h4>{atv.titulo}</h4>
              <p>{atv.descricao}</p>
              <small>Postado em: {new Date(atv.dataPostagem).toLocaleDateString()}</small>
            </div>
            <div className="crud-buttons">
              <button onClick={() => prepararEdicao(atv)}>Editar</button>
              <button onClick={() => deletarAtividade(atv.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
