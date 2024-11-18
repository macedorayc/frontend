import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";

const Chamado = ({ user, initialData, onSubmit, onCancel }) => {
  return (
    <div className="chamadopage">
      <Header user={user} />
      <Form initialData={initialData} onSubmit={onSubmit} onCancel={onCancel} />
    </div>
  );
};

export default Chamado;
