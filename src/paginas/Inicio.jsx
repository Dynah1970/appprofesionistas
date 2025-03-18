/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserTie, FaChalkboardTeacher, FaInfoCircle, FaSignInAlt } from "react-icons/fa";
import "../Inicio.css";

const Inicio = () => {
  const navigate = useNavigate();
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <div className="inicio-container">
      <div className="hero">
        <h1>Bienvenido a <span>ProfesionalistasApp</span></h1>
        <p>Conecta con profesionales certificados y consultores expertos en diversas áreas. Explora opciones, agenda citas y encuentra el apoyo que necesitas de manera segura y rápida.</p>
        
        <div className="beneficios">
          <p>✅ Profesionales y consultores <strong>certificados</strong></p>
          <p>✅ Agendas y pagos <strong>seguros</strong></p>
          <p>✅ Historial de consultas y seguimiento <strong>en un solo lugar</strong></p>
        </div>
        
        <div className="botones">
          <button className="btn-explorar" onClick={() => navigate("/profesionistas")}>
            <FaUserTie /> Explorar Profesionales
          </button>
          <button className="btn-explorar" onClick={() => navigate("/consultores")}>
            <FaChalkboardTeacher /> Explorar Consultores
          </button>
          <button className="btn-explorar" onClick={() => navigate("/sobre-nosotros")}>
            <FaInfoCircle /> Conocer Más
          </button>
          <button className="btn-registrarse" onClick={() => setMostrarModal(true)}>
            Registrarse
          </button>
          <button className="btn-iniciar" onClick={() => navigate("/login")}>
            <FaSignInAlt /> Iniciar Sesión
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
