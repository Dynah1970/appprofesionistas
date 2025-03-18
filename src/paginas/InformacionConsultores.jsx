/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo, useRef } from "react";
import "../App.css";
import "../InformacionProfesional.css";




const InformacionConsultores = () => {
  // ✅ Frases que cambian cada 10 segundos
  const textos = useMemo(() => [
    "Haz crecer tu presencia profesional",
    "Conéctate con más clientes",
    "Optimiza tu perfil y destaca en tu área",
    "Gestiona tu negocio fácilmente"
  ], []);

  const [textoActual, setTextoActual] = useState(textos[0]);
  const carruselRef = useRef(null);

  // ✅ Declarar `reseñas` antes del useEffect
  const reseñas = useMemo(() => [
    { nombre: "Dr. Héctor A. Garza", especialidad: "Odontólogo", ciudad: "San Pedro Garza, Nuevo León", texto: "El 90% de mis pacientes me encuentran por Doctoralia, incluso aunque yo maneje publicidad en otras redes sociales.", imagen: "/ruta-a-imagen1.jpg" },
    { nombre: "Dra. Claudia García", especialidad: "Dermatóloga y Pediatra", ciudad: "Oaxaca de Juárez, Oaxaca", texto: "Gracias a Doctoralia se ha incrementado la contratación de pacientes y además, también ha mejorado la comunicación entre ellos y yo.", imagen: "/ruta-a-imagen2.jpg" },
    { nombre: "Dr. Samuel Sebastián Castañón", especialidad: "Traumatólogo", ciudad: "Ciudad de México", texto: "Mis pacientes tienen la ventaja de que pueden agendar en línea desde donde sea y siempre en horarios flexibles.", imagen: "/ruta-a-imagen3.jpg" },
    { nombre: "Dra. Nallely D. Castañeda", especialidad: "Gastroenteróloga", ciudad: "Guadalajara, Jalisco", texto: "El servicio de Doctoralia es excelente; siempre busca innovar y dar información confiable a los pacientes.", imagen: "/ruta-a-imagen4.jpg" },
    { nombre: "Dr. Fernando López", especialidad: "Cardiólogo", ciudad: "Monterrey, Nuevo León", texto: "Doctoralia ha sido una excelente herramienta para mejorar la gestión de mis pacientes.", imagen: "/ruta-a-imagen5.jpg" },
    { nombre: "Dra. Sofía Martínez", especialidad: "Pediatra", ciudad: "Tijuana, Baja California", texto: "Ahora mis pacientes pueden agendar citas fácilmente y mejorar la comunicación conmigo.", imagen: "/ruta-a-imagen6.jpg" },
    { nombre: "Dr. Carlos Ramírez", especialidad: "Cirujano", ciudad: "Querétaro, Querétaro", texto: "La visibilidad de mi consultorio ha aumentado gracias a Doctoralia.", imagen: "/ruta-a-imagen7.jpg" },
    { nombre: "Dra. Beatriz Gómez", especialidad: "Oftalmóloga", ciudad: "Puebla, Puebla", texto: "Doctoralia me ha permitido atraer nuevos pacientes con facilidad.", imagen: "/ruta-a-imagen8.jpg" },
    { nombre: "Dr. Andrés Salgado", especialidad: "Endocrinólogo", ciudad: "Mérida, Yucatán", texto: "Ahora es más fácil llevar el control de mis consultas y mejorar la atención a mis pacientes.", imagen: "/ruta-a-imagen9.jpg" },
    { nombre: "Dra. Mariana Paredes", especialidad: "Dermatóloga", ciudad: "Cancún, Quintana Roo", texto: "Doctoralia ha mejorado la interacción con mis pacientes y ha optimizado mis tiempos de consulta.", imagen: "/ruta-a-imagen10.jpg" },
    { nombre: "Dr. Javier Núñez", especialidad: "Neurólogo", ciudad: "León, Guanajuato", texto: "Gracias a Doctoralia, he logrado mejorar la eficiencia en la gestión de mis citas.", imagen: "/ruta-a-imagen11.jpg" },
    { nombre: "Dra. Patricia Herrera", especialidad: "Ginecóloga", ciudad: "San Luis Potosí, SLP", texto: "Mis pacientes pueden contactarme fácilmente y hacer citas sin complicaciones.", imagen: "/ruta-a-imagen12.jpg" },
    { nombre: "Dr. Enrique Valdés", especialidad: "Urólogo", ciudad: "Morelia, Michoacán", texto: "Doctoralia ha sido clave para el crecimiento de mi consulta.", imagen: "/ruta-a-imagen13.jpg" },
    { nombre: "Dra. Carolina Méndez", especialidad: "Nutrióloga", ciudad: "Toluca, Estado de México", texto: "Ahora puedo llevar un mejor seguimiento de mis pacientes con Doctoralia.", imagen: "/ruta-a-imagen14.jpg" },
    { nombre: "Dr. Ricardo Pérez", especialidad: "Psiquiatra", ciudad: "Aguascalientes, Ags.", texto: "La plataforma ha sido muy útil para conectar con nuevos pacientes y brindar mejor atención.", imagen: "/ruta-a-imagen15.jpg" }
  ], []);
  
  

  useEffect(() => {
    let scrollAmount = 0;
    const velocidad = 1;
    const intervalo = setInterval(() => {
      if (carruselRef.current) {
        carruselRef.current.scrollLeft += velocidad;
        scrollAmount += velocidad;

        if (scrollAmount >= carruselRef.current.scrollWidth / 2) {
          carruselRef.current.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    }, 25);

    return () => clearInterval(intervalo);
  }, []);


  return (
    <div className="informacion-profesional-container">
      {/* ✅ Sección Principal */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">PARA PROFESIONALES DE TODAS LAS ÁREAS</p>
          <h1 className="hero-title">{textoActual}</h1>
          <p className="hero-description">
            Optimiza tu perfil, conecta con más clientes y gestiona tu negocio fácilmente.
          </p>
        </div>
      </section>

      {/* ✅ Imagen de estadísticas */}
      <div className="imagen-estadisticas">
        <img src="/ruta-a-tu-imagen.png" alt="Estadísticas profesionales" />
      </div>

      {/* ✅ Sección de estadísticas */}
      <section className="estadisticas">
        <div className="stat">
          <span className="stat-num">+10K</span>
          <p>Profesionales registrados</p>
        </div>
        <div className="stat">
          <span className="stat-num">500+</span>
          <p>Áreas de especialidad</p>
        </div>
        <div className="stat">
          <span className="stat-num">1M+</span>
          <p>Usuarios conectados</p>
        </div>
      </section>

      {/* ✅ Barra de Navegación */}
      <section className="nav-categorias">
        <button className="nav-btn active">Para expertos</button>
        <button className="nav-btn">Para clínicas</button>
        <button className="nav-btn">Para empresas</button>
      </section>

      {/* ✅ Nueva Sección de Información */}
      <section className="info-detallada">
        <div className="info-container">
          <div className="info-imagen">
            <img src="/ruta-a-tu-imagen.jpg" alt="Ejemplo de Plataforma" />
          </div>
          <div className="info-texto">
            <h2>Optimiza la gestión y mejora la experiencia</h2>
            <p>Ofrecemos herramientas avanzadas para mejorar la eficiencia y optimizar la comunicación con los clientes.</p>
            <ul>
              <li>✔ Gestión centralizada de clientes</li>
              <li>✔ Análisis detallado de rendimiento</li>
              <li>✔ Soporte 24/7 y automatización</li>
              <li>✔ Herramientas de marketing avanzadas</li>
              <li>✔ Plataforma adaptada a todas las necesidades</li>
            </ul>
            <div className="testimonial">
              <img src="/ruta-a-imagen-testimonial.jpg" alt="Persona Testimonio" className="testimonial-img" />
              <p>“Gracias a esta plataforma, he logrado expandir mi negocio y mejorar la interacción con mis clientes.”</p>
              <h4><strong>Laura Martínez - CEO de Soluciones Digitales</strong></h4>
            </div>
            <button className="btn-info">Descubre más</button>
          </div>
        </div>
      </section>

      {/* ✅ Sección de Video Demostrativo */}
      <section className="video-demo">
        <h2>Descubre cómo funciona</h2>
        <p>Un vistazo rápido a cómo nuestra plataforma ayuda a los profesionales a conectar con más clientes.</p>
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Video de demostración"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </section>
      {/* ✅ Sección Clientes */}
      <section className="clientes">
        <h2>Conoce a algunos de nuestros clientes</h2>
        <div className="clientes-logos">
          <img src="/logos/urosur.png" alt="Urosur" />
          <img src="/logos/diabesmart.png" alt="Diabesmart" />
          <img src="/logos/reina-madre.png" alt="Reina Madre" />
          <img src="/logos/medhub.png" alt="MedHub" />
          <img src="/logos/cancer-center.png" alt="Cancer Center Tec 100" />
        </div>
      </section>

  
            {/* ✅ Sección de Reseñas con Carrusel */}
            {/* ✅ Sección de Reseñas con Carrusel */}
            <section className="reseñas-container">
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="carrusel" ref={carruselRef} style={{ display: "flex", overflow: "hidden", whiteSpace: "nowrap" }}>
          {reseñas.concat(reseñas).map((reseña, index) => (
            <div key={index} className="reseña-card" style={{ flex: "0 0 auto", marginRight: "20px" }}>
              <img src={reseña.imagen} alt={reseña.nombre} className="reseña-img" />
              <p className="reseña-texto">{reseña.texto}</p>
              <h4 className="reseña-nombre">{reseña.nombre}</h4>
              <p className="reseña-especialidad">{reseña.especialidad}</p>
              <p className="reseña-ciudad">{reseña.ciudad}</p>
            </div>
          ))}
        </div>
      </section>


</div>
 );
};

export default InformacionConsultores;
