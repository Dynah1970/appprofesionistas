import { useState } from "react";
import PropTypes from "prop-types"; // Importamos PropTypes para validar props

const Login = ({ setUsuarioAutenticado }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioEncontrado = usuarios.find((u) => u.email === email && u.password === password);

    if (usuarioEncontrado) {
      localStorage.setItem("usuarioAutenticado", JSON.stringify(usuarioEncontrado));
      setUsuarioAutenticado(usuarioEncontrado);
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
};

// 🔹 **Agregamos validación de props**
Login.propTypes = {
  setUsuarioAutenticado: PropTypes.func.isRequired,
};

export default Login;
