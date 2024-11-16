import { Navbar } from "../Navbar";
import keyIcon from "../icons/key_icon.png";
import mailIcon from "../icons/mail_icon.png";
import iconCalendar from "../icons/iconCalendar.png";
import iconCedula from "../icons/iconCedula.png";
import iconPhone from "../icons/iconPhone.png";
import iconEyeForm from "../icons/iconEyeForm.png";
import iconEnter from "../icons/iconEnter.png";
import iconopersona2 from "../icons/iconopersona2.png";

import peopleRegistro from "../assets/img/peopleRegistro.png";

export const Registro = () => {
  return (
    <div className="registro-bg">
      <Navbar />
      <hr className="bg-primary m-0" style={{ height: "20px", opacity: "1" }} />
      <div
        className="container-fluid mt-3 mb-3"
        style={{ maxWidth: "800px", margin: "auto" }}
      >
        <div className="card bg-gradient-secondary mb-3">
          <div className="card-header p-1 border-0">
            <h2 className="text-primary fw-bold text-center">
              Registre su usuario
            </h2>
          </div>
          <div className="card-body">
          <div className="mb-3">
              <label
                htmlFor="name"
                className="form-label fw-bold text-primary"
              >
                <img className="me-2" src={iconopersona2} width={28} height={28} />
                Nombres
              </label>
              <input
                type="name"
                className="form-control text-primary rounded-pill"
                id="name"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="name"
                className="form-label fw-bold text-primary"
              >
                <img className="me-2" src={iconopersona2} width={28} height={28} />
                Apellidos
              </label>
              <input
                type="name"
                className="form-control text-primary rounded-pill"
                id="name"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label fw-bold text-primary"
              >
                <img className="me-2" src={mailIcon} width={28} height={28} />
                Correo Electrónico
              </label>
              <input
                type="email"
                className="form-control text-primary rounded-pill"
                id="email"
              />
            </div>
            

            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="mb-3">
                  <label
                    htmlFor="cedula"
                    className="form-label fw-bold text-primary"
                  >
                    <img
                      src={iconCedula}
                      className="me-1"
                      width={32}
                      height={32}
                    />
                    Cedula
                  </label>
                  <input
                    type="text"
                    className="form-control text-primary rounded-pill"
                    id="cedula"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="mb-3">
                  <label
                    htmlFor="nacimiento"
                    className="form-label fw-bold text-primary"
                  >
                    <img
                      src={iconCalendar}
                      className="me-1"
                      width={32}
                      height={32}
                    />
                    Fecha Nacimiento
                  </label>
                  <input
                    type="date"
                    className="form-control text-primary rounded-pill"
                    id="nacimiento"
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label
                htmlFor="telefono"
                className="form-label fw-bold text-primary"
              >
                <img src={iconPhone} className="me-1" width={32} height={32} />
                Teléfono
              </label>

              <input
                type="text"
                className="form-control text-primary rounded-pill"
                id="telefono"
                placeholder="+"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="psw" className="form-label fw-bold text-primary">
                <img className="me-2" src={keyIcon} width={28} height={28} />
                Contraseña
              </label>
              <div className="input-group bg-white rounded-8">
                <input
                  type="password"
                  className="form-control text-primary border-0 rounded-8"
                />
                <span className="input-group-addon bg-none border-0">
                  <img src={iconEyeForm} />
                </span>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="cpsw" className="form-label fw-bold text-primary">
                <img className="me-2" src={keyIcon} width={28} height={28} />
                Confirmar Contraseña
              </label>
              <div className="input-group bg-white rounded-8">
                <input
                  type="password"
                  className="form-control text-primary border-0 rounded-8"
                />
                <span className="input-group-addon bg-none border-0">
                  <img src={iconEyeForm} />
                </span>
              </div>
            </div>

            <div className="mb-3 p-2">
              <small className="text-primary fw-bold">
                ✓ Debe contener entre 8 y 20 caracteres <br />
                ✓ Debe contener al menos un número, una letra mayúscula, una
                minúscula y uno de estos caracteres especiales ! * # $ @
                <br />✓ No debe contener más de tres (3) caracteres iguales
                consecutivos numéricos o alfabéticos
              </small>
            </div>

            <button
              type="submit"
              className="mt-2 btn btn-lg btn-primary rounded-pill w-100"
            >
              <span>Registrarse</span>
              <img className="align-end ms-2" src={iconEnter} />
            </button>
            <div className="mt-3 container text-center d-flex p-1">
              <div className="col">
                <small className="me-2">¿Ya Posees Cuenta?</small>
              </div>
              <div className="col">
                <a href="/Login" className="fw-bold text-primary">
                  Ingresa Aquí
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-gradient-secondary">
          <div className="row mt-3 p-2">
            <div className="col text-center align-middle">
              <img
                className=""
                width={200}
                height={100}
                src={peopleRegistro}
                alt="Registro"
              />
            </div>
            <div className="col">
              <h4 className="text-center text-primary">
                Ten a la mano tu <b>CEDULA</b> y <b>RIF</b> actualizado
              </h4>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-primary m-0" style={{ height: "20px", opacity: "1" }} />
      <footer className="text-center mt-4">
        <span className="text-white">
          © Banco Universitario. Todos los derechos reservados
        </span>
      </footer>
    </div>
  );
};

export default Registro;
