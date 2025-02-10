/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistroCliente = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();

  const handleRegistro = () => {
    if (!nombre || !correo || !contraseña) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (usuarios.some(user => user.correo === correo)) {
      alert("Este correo ya está registrado. Usa otro.");
      return;
    }

    const nuevoUsuario = { id: Date.now(), nombre, correo, contraseña, rol: "cliente" };

    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    localStorage.setItem("usuarioAutenticado", JSON.stringify(nuevoUsuario));

    alert("Registro exitoso.");
    navigate("/login"); // Lo manda al login
  };

  return (
    <div className="contenedor">
      <h1>Registro de Cliente</h1>
      <label>Nombre:</label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

      <label>Correo electrónico:</label>
      <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />

      <label>Contraseña:</label>
      <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />

      <button onClick={handleRegistro}>Registrarse</button>
    </div>
  );
};

export default RegistroCliente;
