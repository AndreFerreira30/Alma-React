import { useEffect, useState } from "react";
import "./CrudAtividades.css";

export default function CrudDoacao() {
  const [doacoes, setDoacoes] = useState([]);
  const [filtroStatus, setFiltroStatus] = useState("todas");

  const apiUrl = "https://ads2-2025-2-djcbfjadeparacd0.eastus-01.azurewebsites.net/api/Doacao/admin";
  const token = localStorage.getItem("token");

  useEffect(() => {
    listarDoacoes();
  }, []);

  // Traduz status vindo do backend (ingles -> pt-br)
  const traduzStatus = (status) => {
    if (!status) return "pendente";

    switch (status.toLowerCase()) {
      case "approved":
        return "aprovado";
      case "rejected":
        return "rejeitado";
      case "cancelled":
        return "cancelado";
      case "pending":
        return "pendente";
      default:
        return status.toLowerCase(); 
    }
  };

  const listarDoacoes = async () => {
    try {
      const response = await fetch(apiUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error("Erro ao carregar doações");

      const data = await response.json();

      // Força todos os status para PT-BR
      const dataTraduzida = data.map((d) => ({
        ...d,
        status: traduzStatus(d.status),
      }));

      setDoacoes(dataTraduzida);
    } catch (error) {
      console.log("Erro ao carregar doações:", error);
    }
  };

  // Cor de acordo com o status
  const getStatusColor = (status) => {
    if (!status) return "gray";

    switch (status.toLowerCase()) {
      case "aprovado":
        return "green";
      case "rejeitado":
      case "cancelado":
        return "red";
      case "pendente":
      default:
        return "orange";
    }
  };

  // Filtrar doações pela escolha do select
  const doacoesFiltradas = doacoes.filter((d) => {
    if (filtroStatus === "todas") return true;
    return d.status.toLowerCase() === filtroStatus.toLowerCase();
  });

  return (
    <div className="crud-container">
      <h2>Lista de Doações</h2>

      {/* Filtro */}
      <div style={{ marginBottom: "15px" }}>
        <label style={{ marginRight: "10px", fontWeight: "bold" }}>
          Filtrar por status:
        </label>
        <select
          value={filtroStatus}
          onChange={(e) => setFiltroStatus(e.target.value)}
        >
          <option value="todas">Todas</option>
          <option value="aprovado">Aprovadas</option>
          <option value="pendente">Pendentes</option>
          <option value="rejeitado">Rejeitadas</option>
          <option value="cancelado">Canceladas</option>
        </select>
      </div>

      <h3>Histórico</h3>
      <ul className="crud-list">
        {doacoesFiltradas.map((d) => (
          <li key={d.id} className="crud-item">
            <div>
              <h4>Doação #{d.id}</h4>

              <p>
                <strong>Valor:</strong> R$ {Number(d.valor).toFixed(2)}
              </p>

              <p>
                <strong>Status:</strong>
                <span
                  style={{
                    marginLeft: "8px",
                    fontWeight: "bold",
                    color: getStatusColor(d.status),
                  }}
                >
                  {d.status}
                </span>
              </p>

              <p>
                <strong>Usuário:</strong>{" "}
                {d.usuario ? d.usuario.nome : "Anônimo / Não informado"}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                {d.usuario ? d.usuario.email : "Não disponível"}
              </p>

              <p>
                <strong>Data criação:</strong>{" "}
                {new Date(d.dataCriacao).toLocaleDateString()}
              </p>

              {d.dataPagamento && (
                <p>
                  <strong>Data pagamento:</strong>{" "}
                  {new Date(d.dataPagamento).toLocaleDateString()}
                </p>
              )}

              {d.anonima && (
                <p style={{ color: "purple", fontWeight: "bold" }}>
                  Doação Anônima
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
