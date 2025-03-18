/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BarraNavegacion from "./componentes/BarraNavegacion";
import Footer from "./componentes/Footer";
import Inicio from "./paginas/Inicio";
import Profesionistas from "./paginas/Profesionistas";
import RegistroUsuario from "./paginas/RegistroUsuario";
import RegistroCliente from "./paginas/RegistroCliente";
import RegistroProfesionista from "./paginas/RegistroProfesionista";
import InformacionProfesional from "./paginas/InformacionProfesional";
import InformacionConsultores from "./paginas/InformacionConsultores";
import InformacionClientes from "./paginas/InformacionClientes";
import Login from "./paginas/Login";
import SolucionProfesional from "./paginas/SolucionProfesional";
import SolucionesClientes from "./paginas/SolucionesClientes";
import SolucionesConsultores from "./paginas/SolucionesConsultores";
import MenuDesplegable from "./componentes/MenuDesplegable";



const App = () => {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(
    JSON.parse(localStorage.getItem("usuarioAutenticado")) || null
  );

  return (
    <>
      <BarraNavegacion />
      <div className="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/profesionistas" element={<Profesionistas />} />
          <Route path="/registro-usuario" element={<RegistroUsuario />} />
          <Route path="/registro-usuario" element={<RegistroUsuario />} />
          <Route path="/registro-profesionista" element={<RegistroProfesionista />} />
          <Route path="/informacion-profesional" element={<InformacionProfesional />} />
          <Route path="/informacion-clientes" element={<InformacionClientes />} />
          <Route path="/informacion-consultores" element={<InformacionConsultores />} />
          <Route path="/soluciones-clientes" element={<SolucionesClientes />} />
          <Route path="/soluciones-profesionales" element={<SolucionProfesional />} />
          <Route path="/soluciones-consultores" element={<SolucionesConsultores />} />

          <Route path="/login" element={<Login setUsuarioAutenticado={setUsuarioAutenticado} />} />
          <Route
            path="/panel-profesionista"
            element={usuarioAutenticado?.rol === "profesionista" ? <RegistroProfesionista /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
