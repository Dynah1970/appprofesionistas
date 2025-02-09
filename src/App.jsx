/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BarraNavegacion from "./componentes/BarraNavegacion";
import Inicio from "./paginas/Inicio";
import Profesionistas from "./paginas/Profesionistas";
import RegistroProfesionista from "./paginas/RegistroProfesionista";
import RegistroUsuario from "./paginas/RegistroUsuario";
import Login from "./paginas/Login";

const App = () => {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(
    JSON.parse(localStorage.getItem("usuarioAutenticado")) || null
  );

  return (
    <>
      <BarraNavegacion />
      <Routes>
      <Route path="/" element={<Inicio />} />
  <Route path="/profesionistas" element={<Profesionistas />} />
  <Route path="/registro-usuario" element={<RegistroUsuario />} />
  <Route path="/registro-profesionista" element={<RegistroProfesionista />} />
  <Route path="/login" element={<Login setUsuarioAutenticado={setUsuarioAutenticado} />} />
  <Route path="/panel-profesionista" element={usuarioAutenticado?.rol === "profesionista" ? <RegistroProfesionista /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default App;
