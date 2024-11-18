import React, { useState } from "react";
import "./Form.css";

const Form = ({ initialData, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(initialData || {
    titulo: "",
    impacto: "Baixo",
    dataOcorrencia: "",
    atribuido: "",
    descricao: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="chamado-form" onSubmit={handleSubmit}>
      <label>
        Título:
        <input
          type="text"
          name="titulo"
          value={formData.titulo}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Impacto:
        <select name="impacto" value={formData.impacto} onChange={handleChange}>
          <option value="Baixo">Baixo</option>
          <option value="Médio">Médio</option>
          <option value="Alto">Alto</option>
        </select>
      </label>
      <label>
        Data de Ocorrência:
        <input
          type="date"
          name="dataOcorrencia"
          value={formData.dataOcorrencia}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Atribuído:
        <input
          type="text"
          name="atribuido"
          value={formData.atribuido}
          onChange={handleChange}
        />
      </label>
      <label>
        Descrição:
        <textarea
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
        />
      </label>
      <div className="form-buttons">
        <button type="button" onClick={onCancel}>Voltar</button>
        <button type="submit">Salvar</button>
      </div>
    </form>
  );
};

export default Form;