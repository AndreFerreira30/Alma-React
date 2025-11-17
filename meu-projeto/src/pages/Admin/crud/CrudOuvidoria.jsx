import { useEffect, useState } from "react";
import "./CrudAtividades.css"; 


export default function CrudOuvidoria() {
  const [lista, setLista] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [editId, setEditId] = useState(null);

  const apiUrl = "https://ads2-2025-2-djcbfjadeparacd0.eastus-01.azurewebsites.net/api/Ouvidoria";
  const token = localStorage.getItem("token");

  // Carregar registros
  useEffect(() => {
    carregarOuvidorias();
  }, []);

  const carregarOuvidorias = async () => {
    try {
      const response = await fetch(apiUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setLista(data);
    } catch (error) {
      console.log("Erro ao carregar ouvidorias:", error);
    }
  };

  // Envia edição (PUT)
  const enviarFormulario = async (e) => {
    e.preventDefault();

    if (!titulo) {
      alert("O campo título é obrigatório!");
      return;
    }

    const formData = new FormData();
    formData.append("Titulo", titulo);
    formData.append("Descricao", descricao);

    const url = `${apiUrl}/${editId}`;

    try {
      const response = await fetch(url, {
        method: "PUT",
        body: formData,
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error("Erro ao atualizar");

      alert("Ouvidoria atualizada com sucesso!");
      resetarForm();
      carregarOuvidorias();
    } catch (error) {
      alert("Erro ao atualizar.");
    }
  };

  // Deletar
  const deletarItem = async (id) => {
    if (!confirm("Deseja excluir esta mensagem?")) return;

    try {
      await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      carregarOuvidorias();
    } catch (error) {
      alert("Erro ao excluir.");
    }
  };

  // Preparar campos para edição
  const prepararEdicao = (item) => {
    setEditId(item.id);
    setTitulo(item.titulo);
    setDescricao(item.descricao);
  };

  // Resetar
  const resetarForm = () => {
    setEditId(null);
    setTitulo("");
    setDescricao("");
  };

  return (
    <div className="crud-container">
      <h2>Gerenciar Ouvidoria</h2>

      {editId && (
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

          <button type="submit">Salvar Alterações</button>
          <button type="button" onClick={resetarForm}>
            Cancelar
          </button>
        </form>
      )}

      <h3>Mensagens Recebidas</h3>

      <ul className="crud-list">
        {lista.map((item) => (
          <li key={item.id} className="crud-item">
            <div>
              <h4>{item.titulo}</h4>
              {item.descricao && <p>{item.descricao}</p>}
              <p>
                <b>Data:</b>{" "}
                {new Date(item.dataOuvidoria).toLocaleDateString()}
              </p>
            </div>

            <div className="crud-buttons">
              <button onClick={() => prepararEdicao(item)}>Editar</button>
              <button onClick={() => deletarItem(item.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
