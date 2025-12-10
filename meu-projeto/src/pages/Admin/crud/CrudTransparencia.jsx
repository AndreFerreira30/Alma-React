import { useEffect, useState } from "react";
import "./CrudAtividades.css";

export default function CrudTransparencia() {
  const [docs, setDocs] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [editId, setEditId] = useState(null);

  const apiUrl = "https://ads2-2025-2-djcbfjadeparacd0.eastus-01.azurewebsites.net/api/Transparencia";
  const token = localStorage.getItem("token");

  useEffect(() => {
    listarDocs();
  }, []); {/*executa assim que montado os compomentes */}

  {/*Realiza um GET para listar todos os documentos */}
  const listarDocs = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setDocs(data);
    } catch (error) {
      console.log("Erro ao carregar documentos:", error);
    }
  };

  {/*Realiza um POST ou PUT de um documento */}
  const enviarFormulario = async (e) => {
    e.preventDefault();

    // Valida se existe título e arquivo PDF (arquivo obrigatório apenas no POST)
    if (!titulo || (!pdfFile && !editId)) {
      alert("Título e arquivo PDF são obrigatórios!");
      return;
    }

    const formData = new FormData(); // FormData permite enviar arquivos (multipart/form-data)
    formData.append("Titulo", titulo); // Adiciona o título ao corpo da requisição
    formData.append("Descricao", descricao); // Adiciona a descrição

      // Se um novo PDF foi escolhido, anexa o arquivo
    if (pdfFile) formData.append("PdfFile", pdfFile);

    // Se editId existe → PUT (atualizar). Caso contrário → POST (criar)
    const method = editId ? "PUT" : "POST";

    // URL muda caso esteja atualizando
    const url = editId ? `${apiUrl}/${editId}` : apiUrl;

    try {
      const response = await fetch(url, {
        method, // POST ou PUT
        body: formData, // Envia o PDF e campos
        headers: {  
          Authorization: `Bearer ${token}`, // Permite acesso apenas para usuários logados/admins
        },
      });

      if (!response.ok) throw new Error("Erro ao salvar");

      alert(editId ? "Documento atualizado!" : "Documento enviado!");
      resetarForm(); // Limpa os campos
      listarDocs(); // Atualiza a lista na tela
    } catch (error) {
      alert("Erro ao salvar o documento.");
    }
  };

  const deletarDoc = async (id) => {
    if (!confirm("Deseja excluir definitivamente este PDF?")) return;

    try {
      await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      listarDocs();
    } catch (error) {
      alert("Erro ao excluir.");
    }
  };

  const prepararEdicao = (doc) => {
    setEditId(doc.id);
    setTitulo(doc.titulo);
    setDescricao(doc.descricao);
    setPdfFile(null);
  };

  const resetarForm = () => {
    setEditId(null);
    setTitulo("");
    setDescricao("");
    setPdfFile(null);
  };

  return (
    <div className="crud-container">
      <h2>Gerenciar Transparência</h2>

      <form className="crud-form" onSubmit={enviarFormulario}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <textarea
          placeholder="Descrição (opcional)"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        ></textarea>

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setPdfFile(e.target.files[0])}
        />
        <small style={{ color: "#444" }}>
          Apenas PDF — tamanho recomendado até 10MB.
        </small>

        <button type="submit">{editId ? "Atualizar" : "Enviar"}</button>
        {editId && <button type="button" onClick={resetarForm}>Cancelar</button>}
      </form>

      <h3>Documentos Publicados</h3>
      <ul className="crud-list">
        {docs.map((doc) => (
          <li key={doc.id} className="crud-item">
            <div>
              <h4>{doc.titulo}</h4>
              {doc.descricao && <p>{doc.descricao}</p>}
              <p><b>Publicado em:</b> {new Date(doc.dataPublicacao).toLocaleDateString()}</p>
              <a
                href={`https://localhost:7171${doc.linkDownload}`}
                target="_blank"
                rel="noopener noreferrer"
                className="download-link"
              >
                📥 Baixar PDF
              </a>
            </div>

            <div className="crud-buttons">
              <button onClick={() => prepararEdicao(doc)}>Editar</button>
              <button onClick={() => deletarDoc(doc.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
