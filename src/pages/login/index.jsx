import React from "react";

const Login = ({ onLogin }) => {
  const handleLogin = () => {
    onLogin("Pedro Moreira");
  };

  return (
    <div className="login-page">
      <h2>Faça login</h2>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Login;