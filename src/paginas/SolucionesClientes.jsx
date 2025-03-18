/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import "../App.css";
import "../SolucionProfesional.css";

const SolucionesClientes = () => {
  return (
    <div className="contenedor-solucion">
      
      {/* ✅ Sección Hero */}
      <section className="seccion-hero">
        <div className="contenedor-hero">
          <div className="texto-hero">
            <h4 className="subtitulo-hero">PLATAFORMA PARA PROFESIONALES</h4>
            <h1 className="titulo-hero">
              La solución completa para gestionar clientes y optimizar tu negocio
            </h1>
            <p className="descripcion-hero">
              Ofrecemos herramientas digitales para mejorar la relación con tus clientes y hacer crecer tu negocio.
            </p>
            <ul className="beneficios-hero">
              <li>Reduce el tiempo administrativo en un 65%</li>
              <li>Fortalece tu reputación profesional</li>
              <li>Ahorra hasta 2 horas al día en tareas manuales</li>
            </ul>
            <div className="acciones-hero">
              <input type="email" placeholder="Correo electrónico" className="entrada-hero" />
              <input type="text" placeholder="¿En qué área necesitas ayuda?" className="entrada-hero" />
              <button className="boton-hero">Solicitar demostración gratuita</button>
            </div>
            <p className="legal-hero">
  Al hacer clic en &quot;Solicitar demostración gratuita&quot; aceptas nuestros{" "}
  <a href="#">Términos y condiciones</a> y{" "}
  <a href="#">Política de privacidad</a>.
</p>

          </div>
          <div className="imagen-hero">
            <img src="/imagenes/hero-image.png" alt="Gestión profesional" />
          </div>
        </div>
      </section>

      {/* ✅ Sección Características */}
      <section className="seccion-caracteristicas">
        <h2 className="titulo-caracteristicas">
          Ten a la mano una herramienta digital completa y siempre accesible
        </h2>
        <p className="descripcion-caracteristicas">
          Tan simple como abrir una aplicación en cualquier dispositivo con Internet.
        </p>
        <div className="contenedor-caracteristicas">
          <div className="caracteristica-item">
            <img src="/imagenes/visibilidad.png" alt="Mayor Visibilidad" />
            <h3>Mayor Visibilidad</h3>
            <p>
              Mejora tu presencia digital y facilita el acceso a tus servicios en línea.
            </p>
          </div>
          <div className="caracteristica-item">
            <img src="/imagenes/accesibilidad.png" alt="Más Accesibilidad" />
            <h3>Más Accesibilidad</h3>
            <p>
              Permite a tus clientes agendar citas desde redes sociales, sitios web y más.
            </p>
          </div>
          <div className="caracteristica-item">
            <img src="/imagenes/comunicacion.png" alt="Mejor Comunicación" />
            <h3>Mejor Comunicación</h3>
            <p>
              Utiliza herramientas digitales para agilizar la comunicación con clientes.
            </p>
          </div>
        </div>
      </section>
      {/* ✅ Sección de Agendamiento */}
<section className="seccion-agendamiento">
  <div className="contenedor-agendamiento">
    <div className="imagen-agendamiento">
      <img src="/imagenes/agendamiento.png" alt="Agenda Profesional" />
    </div>
    <div className="contenido-agendamiento">
      <h2>Ahorra tiempo en tu trabajo. Facilita la organización de tu agenda.</h2>
      <p>Descubre una manera más eficiente para programar reuniones y citas.</p>

      <div className="lista-desplegable">
        <details open>
          <summary className="opcion-desplegable">
            <span>📅 Agendamiento en menos de 1 minuto</span>
          </summary>
          <p>No limites a tus clientes con horarios fijos. Con la reserva online podrán elegir el mejor momento de forma rápida y sencilla desde cualquier dispositivo.</p>
        </details>

        <details>
          <summary className="opcion-desplegable">
            <span>🔗 Disponibilidad en múltiples canales</span>
          </summary>
          <p>Permite a tus clientes reservar desde redes sociales, página web, WhatsApp y otros medios digitales.</p>
        </details>

        <details>
          <summary className="opcion-desplegable">
            <span>📱 Gestión desde el celular</span>
          </summary>
          <p>Administra tu agenda desde cualquier lugar, recibiendo notificaciones en tiempo real.</p>
        </details>

        <details>
          <summary className="opcion-desplegable">
            <span>⏳ Ahorra hasta 2 horas diarias</span>
          </summary>
          <p>Automatiza la confirmación de citas y reduce el tiempo invertido en llamadas y mensajes.</p>
        </details>

        <details>
          <summary className="opcion-desplegable">
            <span>♻️ Reprogramaciones sin esfuerzo</span>
          </summary>
          <p>Facilita la reprogramación automática y evita cancelaciones innecesarias.</p>
        </details>
      </div>

      <button className="boton-agendamiento">Pedir una demostración</button>
    </div>
  </div>
</section>
{/* ✅ Sección de Comunicación */}
<section className="seccion-comunicacion">
  <div className="contenedor-comunicacion">
    <div className="contenido-comunicacion">
      <h2>Mejora y agiliza la comunicación con tus clientes</h2>
      <p>Una única plataforma para fortalecer la relación y mejorar la fidelidad de tus clientes.</p>

      <div className="lista-desplegable">
        <details open>
          <summary className="opcion-desplegable">
            <span>🔔 Reduce la falta de asistencia en un 65%</span>
          </summary>
          <p>Gracias a los recordatorios y confirmaciones automáticas, tus clientes recibirán mensajes de WhatsApp para confirmar, cancelar o reprogramar reuniones de manera autónoma.</p>
        </details>

        <details>
          <summary className="opcion-desplegable">
            <span>✅ Check-in online</span>
          </summary>
          <p>Facilita el acceso digital a tus servicios, permitiendo que los clientes realicen su registro de forma remota.</p>
        </details>

        <details>
          <summary className="opcion-desplegable">
            <span>📢 Campañas de comunicación</span>
          </summary>
          <p>Envía recordatorios y mensajes personalizados a tus clientes para mejorar la comunicación y fidelización.</p>
        </details>

        <details>
          <summary className="opcion-desplegable">
            <span>💬 Chat en tiempo real</span>
          </summary>
          <p>Facilita la interacción con tus clientes mediante chats en tiempo real, mejorando la atención y satisfacción.</p>
        </details>
      </div>

      <button className="boton-comunicacion">Pedir una demostración</button>
    </div>

    <div className="imagen-comunicacion">
      <img src="/imagenes/comunicacion.png" alt="Mensajes y comunicación digital" />
    </div>
  </div>
</section>
{/* ✅ Sección de Presencia Online */}
<section className="seccion-presencia">
  <div className="contenedor-presencia">
    <div className="imagen-presencia">
      <img src="/imagenes/presencia-online.png" alt="Gestión de citas y visibilidad online" />
    </div>

    <div className="contenido-presencia">
      <h2>Mejora tu presencia online para clientes actuales y futuros</h2>
      <p>Sé más accesible para tus clientes.</p>

      <div className="lista-desplegable">
        <details open>
          <summary className="opcion-desplegable">
            <span>👁️ Toda la información sobre tu negocio en un mismo sitio</span>
          </summary>
          <p>
            Nuestra plataforma ha sido diseñada en base a lo que los clientes buscan: tu experiencia, servicios, tarifas, ubicación y disponibilidad. 
            Además, podrán agendar una reunión en muy pocos clics.
          </p>
        </details>

        <details>
          <summary className="opcion-desplegable">
            <span>⭐ Posición preferente en los listados de nuestra plataforma</span>
          </summary>
          <p>Obtén mayor visibilidad en nuestra red y destaca entre la competencia.</p>
        </details>

        <details>
          <summary className="opcion-desplegable">
            <span>🔍 Más visibilidad y accesibilidad en buscadores</span>
          </summary>
          <p>Optimiza tu perfil para que aparezca en los resultados de búsqueda de Google y otros directorios.</p>
        </details>

        <details>
          <summary className="opcion-desplegable">
            <span>💻 Sitio web profesional listo en 10 minutos</span>
          </summary>
          <p>Crea y personaliza tu página en minutos sin conocimientos técnicos.</p>
        </details>
      </div>

      <button className="boton-presencia">Pedir una demostración</button>
    </div>
  </div>
</section>
{/* ✅ Sección de Reputación Digital */}
<section className="seccion-reputacion">
  <div className="contenedor-reputacion">
    <div className="contenido-reputacion">
      <h2>Construye tu reputación digital 2 veces más rápido</h2>
      <p>Incrementa la recolección de opiniones de tus clientes.</p>

      <div className="lista-desplegable">
        <details open>
          <summary className="opcion-desplegable">
            <span>💚 Consigue más reseñas sin esfuerzo</span>
          </summary>
          <p>
            Con nuestra plataforma, puedes solicitar automáticamente que tus clientes compartan su opinión. 
            Nuestro equipo validará que la reseña sea legítima antes de publicarla en tu perfil. 
            También puedes mostrar estas opiniones en tu Perfil de Negocio de Google.
          </p>
        </details>

        <details>
          <summary className="opcion-desplegable">
            <span>👍 Lleva la experiencia más allá de la consulta</span>
          </summary>
          <p>Recibe opiniones y valoraciones que te ayuden a mejorar tu negocio.</p>
        </details>

        <details>
          <summary className="opcion-desplegable">
            <span>🧑‍🤝‍🧑 Tus clientes, los mejores embajadores</span>
          </summary>
          <p>Las recomendaciones de tus clientes generan confianza y atraen más negocio.</p>
        </details>
      </div>

      <button className="boton-reputacion">Pedir una demostración</button>
    </div>

    <div className="imagen-reputacion">
      <img src="/imagenes/reputacion-digital.png" alt="Opiniones y valoraciones de clientes" />
    </div>
  </div>
</section>
{/* ✅ Sección de Reputación Digital */}
<section className="seccion-reputacion">
  <div className="contenedor-reputacion">
    <div className="contenido-reputacion">
      <h2>Construye tu reputación digital 2 veces más rápido</h2>
      <p>Incrementa la recolección de opiniones de tus clientes.</p>

      <div className="lista-desplegable">
        <details open>
          <summary className="opcion-desplegable">
            <span>💚 Consigue más reseñas sin esfuerzo</span>
          </summary>
          <p>
            Con nuestra plataforma, puedes solicitar automáticamente que tus clientes compartan su opinión. 
            Nuestro equipo validará que la reseña sea legítima antes de publicarla en tu perfil. 
            También puedes mostrar estas opiniones en tu Perfil de Negocio de Google.
          </p>
        </details>

        <details>
          <summary className="opcion-desplegable">
            <span>👍 Lleva la experiencia más allá de la consulta</span>
          </summary>
          <p>Recibe opiniones y valoraciones que te ayuden a mejorar tu negocio.</p>
        </details>

        <details>
          <summary className="opcion-desplegable">
            <span>🧑‍🤝‍🧑 Tus clientes, los mejores embajadores</span>
          </summary>
          <p>Las recomendaciones de tus clientes generan confianza y atraen más negocio.</p>
        </details>
      </div>

      <button className="boton-reputacion">Pedir una demostración</button>
    </div>

    <div className="imagen-reputacion">
      <img src="/imagenes/reputacion-digital.png" alt="Opiniones y valoraciones de clientes" />
    </div>
  </div>
</section>
{/* ✅ Sección de Videoconsultas */}
<section className="seccion-videoconsultas">
  <div className="contenedor-videoconsultas">
    <div className="imagen-videoconsulta">
      <img src="/imagenes/videoconsulta.png" alt="Consulta en línea" />
      <div className="tarjeta-consulta">
        <p className="estado-consulta">Consulta en línea</p>
        <p className="hora-consulta">04:34</p>
        <h4>Luisa Carrasco</h4>
        <p>Última visita</p>
        <div className="acciones-consulta">
          <button className="boton-video">&#128249;</button>
          <button className="boton-colgar">&#128222;</button>
          <button className="boton-mic">&#127908;</button>
        </div>
      </div>
      <div className="testimonio-videoconsulta">
        <p>
          Gracias a la consulta en línea he reducido el ausentismo. El pago por adelantado 
          ayuda a que los clientes tengan un mayor compromiso con la cita.
        </p>
        <strong>Dra. Frania Gómez - Dermatóloga</strong>
      </div>
    </div>

    <div className="contenido-videoconsultas">
      <h2>Atiende virtualmente a tus clientes con las videoconsultas</h2>
      <p>Aprovecha la tecnología para atender a tus clientes desde cualquier lugar.</p>

      <div className="lista-desplegable">
        <details open>
          <summary className="opcion-desplegable">
            <span>📅 Nuevos canales, nuevos clientes</span>
          </summary>
          <p>
            Si tu cliente no puede desplazarse a tu oficina o el servicio lo permite, 
            las videoconsultas te permiten ampliar tu alcance sin importar la distancia.
          </p>
        </details>

        <details>
          <summary className="opcion-desplegable">
            <span>⏳ Ahorra tiempo sin perder calidad en la atención</span>
          </summary>
          <p>Reduce los tiempos de espera y mejora la organización de tus consultas.</p>
        </details>

        <details>
          <summary className="opcion-desplegable">
            <span>🔒 Almacenamiento de datos 100% seguro</span>
          </summary>
          <p>Todos los datos de tus clientes están protegidos con cifrado avanzado.</p>
        </details>

        <details>
          <summary className="opcion-desplegable">
            <span>💳 Pago online 100% seguro</span>
          </summary>
          <p>Asegura el compromiso del cliente con pagos por adelantado.</p>
        </details>

        <details>
          <summary className="opcion-desplegable">
            <span>📅 Integrado con la agenda y los episodios</span>
          </summary>
          <p>Gestiona fácilmente las citas y el historial de clientes en un solo lugar.</p>
        </details>
      </div>

      <button className="boton-videoconsultas">Pedir una demostración</button>
    </div>
  </div>
</section>
{/* ✅ Sección de Episodios Clínicos Digitales */}
<section className="seccion-episodios">
  <div className="contenedor-episodios">
    <div className="contenido-episodios">
      <h2>Episodios digitales personalizados y siempre accesibles</h2>
      <p>Todos los datos de los clientes en pocos clics</p>

      <div className="lista-desplegable">
        <details open>
          <summary className="opcion-desplegable">
            <span>📋 Detallados e intuitivos</span>
          </summary>
          <p>
            En los episodios digitales, no solo encontrarás datos de contacto, sino también acceso a 
            historiales, documentos adjuntos y registros personalizados. ¿Necesitas más información? 
            Puedes añadir notas y comentarios específicos por cliente.
          </p>
        </details>

        <details>
          <summary className="opcion-desplegable">
            <span>💊 Emisión de documentos electrónicos</span>
          </summary>
          <p>Genera y almacena documentos importantes de manera digital y segura.</p>
        </details>

        <details>
          <summary className="opcion-desplegable">
            <span>🔒 Tus datos, siempre seguros</span>
          </summary>
          <p>Garantizamos la seguridad y privacidad de toda la información de tus clientes.</p>
        </details>
      </div>

      <button className="boton-episodios">Pedir una demostración</button>
    </div>

    <div className="imagen-episodios">
      <img src="/imagenes/episodios.png" alt="Historial de episodios" />
      <div className="tarjeta-historial">
        <h4>Luisa Carrasco</h4>
        <p>Visitas y evolución</p>
        <button className="boton-nuevo-episodio">📌 Crear un episodio</button>
      </div>
      <div className="testimonio-episodios">
        <p>
          "Esta plataforma me ha ayudado en la organización de mis clientes; es mi herramienta 
          diaria y ahora no tengo que preocuparme por la gestión manual."
        </p>
        <strong>Dra. Lesly Rodríguez - Ginecóloga</strong>
      </div>
    </div>
  </div>
</section>
<section className="seccion-preguntas">
  <h2 className="titulo-preguntas">Damos respuesta a las preguntas más frecuentes</h2>
  <div className="contenedor-preguntas">
    
  <details className="pregunta">
  <summary>📌 ¿Qué es lo que puedo gestionar con la plataforma?</summary>
  <p>
    En nuestra plataforma podrás administrar citas, clientes y actividades laborales.
    Define horarios, personaliza notificaciones y accede a tu información desde cualquier 
    dispositivo.
  </p>
</details>


    <details className="pregunta">
    <summary>🔒 ¿Mis datos están seguros?</summary>
<p>
  Sí, contamos con encriptación avanzada y protocolos de seguridad para proteger toda la 
  información de tu negocio y tus clientes.
</p>

    </details>

    <details className="pregunta">
  <summary>📝 ¿Qué pasa con las citas agendadas en línea?</summary>
  <p>
    Las citas agendadas en línea se sincronizan automáticamente con tu agenda.
    Cualquier cambio que realices será notificado a tus clientes de forma inmediata, 
    asegurando una gestión eficiente.
  </p>
</details>


    <details className="pregunta">
      <summary>⭐ ¿Cómo puedo obtener opiniones de clientes?</summary>
      <p>
        Al activar la opción de reseñas, tus clientes podrán dejar opiniones sobre tu servicio.
        Esto te permitirá fortalecer tu reputación y atraer más clientes potenciales.
      </p>
    </details>

  </div>
</section>

   
    </div>
  );
};

export default SolucionesClientes;
