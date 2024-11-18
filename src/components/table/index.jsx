import React from "react";
import "./Table.css";

const Table = ({ chamados, onEdit, onDelete }) => {
  return (
    <table className="chamados-table">
      <thead>
        <tr>
          <th>Título</th>
          <th>Impacto</th>
          <th>Data Ocorrência</th>
          <th>Atribuído</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {chamados.map((chamado) => (
          <tr key={chamado.id}>
            <td>{chamado.titulo}</td>
            <td>{chamado.impacto}</td>
            <td>{chamado.dataOcorrencia}</td>
            <td>{chamado.atribuido}</td>
            <td>
              <button onClick={() => onEdit(chamado)}>Editar</button>
              <button onClick={() => onDelete(chamado.id)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;