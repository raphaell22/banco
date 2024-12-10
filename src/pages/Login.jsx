import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar";
import keyIcon from "../icons/key_icon.png";
import mailIcon from "../icons/mail_icon.png";
import loginBackground from "../assets/img/loginBackground.png";
import iconPerson from "../icons/personaFill.png";
import iconEyeForm from "../icons/iconEyeForm.png";

export const Login = () => {

  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  sessionStorage.clear();
  const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage(''); // Limpiar cualquier mensaje previo
  
    try {
        const response = await fetch('http://localhost:3000/v1/public/client/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const json = await response.json();

        if (response.ok) {
            sessionStorage.setItem('dt',btoa(JSON.stringify(json['data'])));
            sessionStorage.setItem('tk',btoa(json.data.jwt));
            alertify.success('Bienvenido!');
            navigate('/Banco/Inicio');
        } else {
            sessionStorage.clear();
            alertify.alert('Error de autenticación: ' + json.message).set({title:"Error al Iniciar Sesión"});
            //setMessage('Error de autenticación: ' + json.message);
        }
    } catch (error) {
        alertify.alert('Error al conectar con la API: ' + error.message);
    }
};

  return (
    <div>
      <Navbar />
      <hr className="bg-primary m-0" style={{ height: "30px", opacity: "1" }} />
      <div className="mt-0 container-fluid bg-gradient-primary position-relative">
        <img
          style={{
            opacity: 0.5,
            width: "100%",
            height: "100vh",
            objectFit: "cover",
          }}
          src={loginBackground}
          alt="Background"
        />

        <div className="position-absolute top-50 start-50 translate-middle">
          <div
            className="card bg-gradient-secondary"
            style={{ width: "300px", zIndex: 2 }}
          >
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="form-label fw-bold text-primary"
                  >
                    <img
                      className="me-2"
                      src={mailIcon}
                      width={32}
                      height={32}
                    />
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control rounded-pill"
                    id="email"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="pasw"
                    className="form-label fw-bold text-primary"
                  >
                    <img
                      className="me-2"
                      src={keyIcon}
                      width={32}
                      height={32}
                    />
                    Contraseña
                  </label>
                  <div className="input-group bg-white rounded-8">
                    <input
                      id="pasw"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      value={password}
                      type="password"
                      className="form-control text-primary border-0 rounded-8"
                    />
                    <span className="input-group-addon bg-none border-0">
                      
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-3 btn rounded-3 btn-primary w-100"
                >
                  <img
                    src={iconPerson}
                    className="m-2"
                    width={32}
                    height={32}
                  />
                  Ingresar
                </button>
              </form>
              {message && <p>{message}</p>}
              <div className="mt-3 d-lg-flex text-center p-1">
                <small className="me-1">¿Primera vez que Ingresas?</small>
                <a href="/Registro" className="fw-bold text-primary">
                  Registrate Aquí
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom-0 start-50 translate-middle">
          <span className="text-white">
            © Banco Universitario. Todos los derechos reservados
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;