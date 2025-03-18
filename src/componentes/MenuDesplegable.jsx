import { useState } from "react";
import PropTypes from "prop-types";
import "../App.css";

const MenuDesplegable = ({ titulo, opciones }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="menu-container">
            {/* Botón del menú */}
            <button 
                className="menu-button" 
                onClick={() => setOpen(!open)}
            >
                {titulo} ▼
            </button>

            {/* Menú desplegable */}
            {open && (
                <div className="menu-dropdown">
                    {opciones.map((opcion, index) => (
                        <a key={index} href={opcion.link}>
                            {opcion.nombre}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

// Validación con PropTypes
MenuDesplegable.propTypes = {
    titulo: PropTypes.string.isRequired,
    opciones: PropTypes.arrayOf(
        PropTypes.shape({
            nombre: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default MenuDesplegable;
