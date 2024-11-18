import React from "react";
import Header from "../components/Header";
import Table from "../components/Table";

const Dashboard = ({ user, chamados, onEdit, onDelete, onCreate }) => {
  return (
    <div className="dashboard">
      <Header user={user} />
      <button className="new-chamado-btn" onClick={onCreate}>
        Novo Chamado
      </button>
      <Table chamados={chamados} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
};

export default Dashboard;