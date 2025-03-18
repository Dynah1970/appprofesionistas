/* eslint-disable no-unused-vars */
import React from "react";
import "../App.css"; // Asegurar que los estilos del footer se apliquen
import "../Footer.css";
const Footer = () => {
  return (
    <>
      {/* ✅ Sección de CTA */}
      <section className="seccion-cta">
        <div className="cta-content">
          <h2>¡Comencemos a trabajar de la mano!</h2>
          <p>
            Con nuestra plataforma tendrás las herramientas adecuadas para hacer cada parte de tu trabajo más eficaz y con un equipo siempre dispuesto a ayudar.
          </p>
          <button className="btn-cta">Solicitar demostración gratuita</button>
        </div>
      </section>

      {/* ✅ Sección Nfinal */}
      <section className="nfinal">
        <div className="nfinal-container">
          <div className="nfinal-logo">
            <img src="/ruta-a-tu-logo.png" alt="ProfesionistasApp Pro" className="nfinal-logo-img" />
            <p><strong>Profesionales App </strong></p>
            <p>Profesionales App México S.A. de C.V.</p>
            <p>Av. Callao 913/103</p>
            <p>Col. Lindavista Alcaldia G.A.M.</p>
            <p>CP 07300, CDMX, México.</p>
            <button className="nfinal-btn">Contáctanos</button>
          </div>

          <div className="nfinal-links">
            <div>
              <h4>¿Con quiénes trabajamos?</h4>
              <ul>
                <li><a href="#">Profesionistas</a></li>
                <li><a href="#">Empresas</a></li>
                <li><a href="#">Particulares</a></li>
              </ul>
            </div>

            <div>
              <h4>Productos</h4>
              <ul>
                <li><a href="#">Agenda Profesionistas</a></li>
                <li><a href="#">Agenda Para Empresas</a></li>
                <li><a href="#">Recepcinistas</a></li>
              </ul>
            </div>

            <div>
              <h4>Más vistos</h4>
              <ul>
                <li><a href="#">Centro de ayuda</a></li>
                <li><a href="#">Cómo funciona Profesionistasapp</a></li>
                <li><a href="#">Precios</a></li>
                <li><a href="#">Materiales de apoyo</a></li>
                <li><a href="#">$1,000 para ti 💵</a></li>
              </ul>
            </div>

            <div>
              <h4>ProfesionistasApp</h4>
              <ul>
                <li><a href="#">Quiénes somos</a></li>
                <li><a href="#">Términos y condiciones</a></li>
                <li><a href="#">Protección de datos y LFPD</a></li>
                <li><a href="#">Boletin</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="footer">
        <p>&copy; 2025 ProfesionistasApp.</p>
        <ul className="footer-links">
          <li><a href="/aviso-privacidad">Aviso de Privacidad</a></li>
          <li><a href="/terminos-condiciones">Términos y Condiciones</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
