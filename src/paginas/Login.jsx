/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../App.css"; 
import "../login.css";


const Login = () => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  // 🔹 Limpiar los campos cuando se carga la página
  useEffect(() => {
    setCorreo("");
    setContraseña("");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inicio de sesión exitoso");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Accede a tu cuenta</h1>

        <button className="login-btn google">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" />
          Continuar con Google
        </button>

        <button className="login-btn apple">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" />
          Continuar con Apple
        </button>

        <div className="divider">
          <span>o</span>
        </div>

        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            autoComplete="new-email" /* Truco para evitar autocompletado */
            required
          />
          <input
            type="password"
            name="contraseña"
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            autoComplete="new-password" /* Truco para evitar autocompletado */
            required
          />
          <button type="submit" className="login-submit">Iniciar sesión</button>
        </form>

        <a href="#" className="forgot-password">He olvidado mi contraseña</a>

        <p className="register-link">
          ¿Todavía sin cuenta? <Link to="/registro-usuario">Quiero registrarme</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
