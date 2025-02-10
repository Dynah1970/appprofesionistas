/* eslint-disable no-unused-vars */
import React, { useState } from "react";  
import { useNavigate } from "react-router-dom";
import "../Inicio.css"; 

const Inicio = () => {
  const navigate = useNavigate();
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <div className="inicio-container">
      <div className="hero">
        <h1>Bienvenido a <span>ProfesionalistasApp</span></h1>
        <p>Encuentra y agenda citas con profesionales certificados de diversas áreas.</p>
        
        <div className="botones">
          <button className="btn-explorar" onClick={() => navigate("/profesionistas")}>
            Explorar Profesionales
          </button>
          <button className="btn-registrarse" onClick={() => setMostrarModal(true)}>
            Registrarse
          </button>
        </div>
      </div>

      {/* Modal de Registro Mejorado */}
      {mostrarModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Bienvenido al portal de profesionales</h2>
            <p>¿Cómo deseas registrarte?</p>

            <div className="modal-botones">
              <button className="btn-modal-cliente" onClick={() => navigate("/registro-usuario")}>Cliente</button>
              <button className="btn-modal-pro" onClick={() => navigate("/registro-profesionista")}>Profesional</button>
            </div>

            <button className="btn-salir" onClick={() => setMostrarModal(false)}>Salir</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inicio;
