import React from "react";
import "./cabecalho.css";

const Cabecalho = ({ user }) => {
  return (
    <header className="cabecalho">
      <h1>INSF - Chamados</h1>
      <div className="cabecalho-info">
        <span>Bem-vindo, {user}!</span>
        <button className="logout-btn">Sair</button>
      </div>
    </header>
  );
};

export default Cabecalho;