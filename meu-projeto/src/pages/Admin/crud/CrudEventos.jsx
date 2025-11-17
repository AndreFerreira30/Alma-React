import { useEffect, useState } from "react";
import "./CrudAtividades.css";

export default function CrudEventos() {
  const [eventos, setEventos] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [localEvento, setLocalEvento] = useState("");
  const [dataEvento, setDataEvento] = useState("");
  const [imagem, setImagem] = useState(null);
  const [editId, setEditId] = useState(null);

  const apiUrl = "https://ads2-2025-2-djcbfjadeparacd0.eastus-01.azurewebsites.net/api/Eventos";
  const token = localStorage.getItem("token");

  useEffect(() => {
    listarEventos();
  }, []);

  const listarEventos = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setEventos(data);
    } catch (error) {
      console.log("Erro ao carregar eventos:", error);
    }
  };

  const enviarFormulario = async (e) => {
    e.preventDefault();
    if (!titulo || !descricao || !localEvento || !dataEvento || (!imagem && !editId)) {
      alert("Preencha todos os campos!");
      return;
    }

    const formData = new FormData();
    formData.append("Titulo", titulo);
    formData.append("Descricao", descricao);
    formData.append("LocalEvento", localEvento);
    formData.append("DataEvento", dataEvento);
    if (imagem) formData.append("ImagemArquivo", imagem);

    const method = editId ? "PUT" : "POST";
    const url = editId ? `${apiUrl}/${editId}` : apiUrl;

    try {
      const response = await fetch(url, {
        method,
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) throw new Error("Erro ao salvar");

      alert(editId ? "Evento atualizado!" : "Evento criado!");
      resetarForm();
      listarEventos();
    } catch (error) {
      console.log(error);
      alert("Erro ao salvar");
    }
  };

  const deletarEvento = async (id) => {
    if (!confirm("Deseja realmente excluir este evento?")) return;

    try {
      await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      listarEventos();
    } catch (error) {
      console.log("Erro ao deletar", error);
    }
  };

  const prepararEdicao = (evento) => {
    setEditId(evento.id);
    setTitulo(evento.titulo);
    setDescricao(evento.descricao);
    setLocalEvento(evento.localEvento);
    setDataEvento(evento.dataEvento?.split(":").slice(0,2).join(":"));
  };

  const resetarForm = () => {
    setEditId(null);
    setTitulo("");
    setDescricao("");
    setLocalEvento("");
    setDataEvento("");
    setImagem(null);
  };

  return (
    <div className="crud-container">
      <h2>Gerenciar Eventos</h2>

      <form className="crud-form" onSubmit={enviarFormulario}>
        <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} />

        <textarea placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>

        <input type="text" placeholder="Local do Evento" value={localEvento} onChange={(e) => setLocalEvento(e.target.value)} />

        <label style={{ fontWeight: "bold", marginTop: "5px" }}>Data e horário do evento</label>
        <input
          type="datetime-local"
          value={dataEvento}
          onChange={(e) => setDataEvento(e.target.value)}
        />
        <small style={{ color: "#555", marginBottom: "10px" }}>
          Selecione o dia e horário em que o evento irá ocorrer.
        </small>

        <input type="file" accept=".jpg,.png" onChange={(e) => setImagem(e.target.files[0])} />

        <button type="submit">{editId ? "Atualizar" : "Criar"}</button>
        {editId && <button type="button" onClick={resetarForm}>Cancelar</button>}
      </form>

      <h3>Lista de Eventos</h3>
      <ul className="crud-list">
        {eventos.map((eve) => (
          <li key={eve.id} className="crud-item">
            <img src={eve.linkImagem} className="thumb" alt="evento" />

            <div>
              <h4>{eve.titulo}</h4>
              <p>{eve.descricao}</p>
              <p><b>Local:</b> {eve.localEvento}</p>
              <p><b>Data do Evento:</b> {new Date(eve.dataEvento).toLocaleString()}</p>
              <small>Postado em: {new Date(eve.dataPostagem).toLocaleDateString()}</small>
            </div>

            <div className="crud-buttons">
              <button onClick={() => prepararEdicao(eve)}>Editar</button>
              <button onClick={() => deletarEvento(eve.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
