import { useState } from "react";
import "./Admin.css";

// Import dos CRUDS
import CrudAtividades from "./crud/CrudAtividades";
import CrudEventos from "./crud/CrudEventos";
import CrudTransparencia from "./crud/CrudTransparencia";
import CrudOuvidoria from "./crud/CrudOuvidoria";
import CrudUsuarios from "./crud/CrudUsuarios";
import CrudDoacao from "./crud/CrudDoacao";

export default function Admin() { 
  // estados da tela padroniozado o inicio em "atividades"
  const [tela, setTela] = useState("atividades");

  return (
    <div className="admin-container"> 
      <h1 className="admin-title">Painel Administrativo</h1>

      <div className="admin-menu"> {/*Menu do dashboard do admin */}
        {/*Metodo "OnClick" que atualiza o estado da tela ao clicar no botão*/}
        <button onClick={() => setTela("atividades")}>Atividades</button>
        <button onClick={() => setTela("eventos")}>Eventos</button>
        <button onClick={() => setTela("transparencia")}>Transparência</button>
        <button onClick={() => setTela("ouvidoria")}>Ouvidoria</button>
        <button onClick={() => setTela("usuarios")}>Usuários</button>
        <button onClick={() => setTela("doacao")}>Doações</button>
      </div>

      <div className="admin-content"> {/*Parte que possibilita a edição no painel do admin */}
        {/* Renderiza dinamicamente o componente de acordo com o valor atual de "tela" */}
        {tela === "atividades" && <CrudAtividades />}
        {tela === "eventos" && <CrudEventos />}
        {tela === "transparencia" && <CrudTransparencia />}
        {tela === "ouvidoria" && <CrudOuvidoria />}
        {tela === "usuarios" && <CrudUsuarios />}
        {tela === "doacao" && <CrudDoacao />}
      </div>

    </div>
  );
}
