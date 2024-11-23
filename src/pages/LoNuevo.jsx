import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import inmediata from "../assets/img/lonuevo_inmediata.png";
import cuenta from "../assets/img/lonuevo_abrecuenta.png";
import opciones from "../assets/img/lonuevo_opciones.png";
import ideal from "../assets/img/lonuevo_ideal.png";
import ws from "../assets/img/lonuevo_ws.png";

const LoNuevo = () => {
  return (
    <div>
    <Navbar />
    <div className="container-fluid bg-gradient-primary">
      <div className="row py-2">
        <div className="card col-lg col-sm m-lg-5 p-0 rounded-3">
          <div className="card-header d-flex bg-primary">
            <img className="img-fluid m-auto text-center" src={ws} />
          </div>
          <div className="card-body text-center">
            <h3 className="fw-bold text-primary">Estamos en Whatsapp</h3>
            <p className="text-primary text-center">
              A partir de ahora seremos tu mejor 
              contacto, estaremos para ti dónde 
              y cuándo desees.
              </p>
          </div>

        </div>
        <div className="card col-lg col-sm m-lg-5 p-0 rounded-3">
          <div className="card-header d-flex bg-primary">
            <img className="img-fluid m-auto text-center" src={inmediata} />
          </div>
          <div className="card-body text-center">
            <h3 className="fw-bold text-primary">Inmediata, cómoda y segura</h3>
            <p className="text-primary text-center">La mejor opción para realizar todas tus operaciones.</p>
          </div>

        </div>
        <div className="card col-lg col-sm m-lg-5 p-0 rounded-3">
          <div className="card-header d-flex bg-primary">
            <img className="img-fluid m-auto text-center" src={ideal} />
          </div>
          <div className="card-body text-center">
            <h3 className="fw-bold text-primary">¡El Plan Ideal!</h3>
            <p className="text-primary text-center">
              Queremos crecer contigo, acompañarte en esta etapa universitaria y ser parte de tus logros, por eso tenemos planes ideados para ti.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card col-lg col-sm m-lg-5 p-0 border-0">
          <div className="card-header d-flex bg-primary">
            <img className="img-fluid m-auto text-center" src={cuenta} />
          </div>
          <div className="card-body text-center">
            <h3 className="fw-bold text-primary">Abre tu cuenta en pocos pasos</h3>
            <p className="text-primary text-center">Si quieres ser nuestro cliente, ahora podrás abrir de forma rápida y segura tu Cuenta en Banco Universitario</p>
          </div>
        </div>
        <div className="card col-lg col-sm m-lg-5 p-0 border-0">
          <div className="card-header d-flex bg-primary">
            <img className="img-fluid m-auto text-center" src={opciones} />
          </div>
          <div className="card-body text-center">
            <h3 className="fw-bold text-primary">Las mejores opciones para pagar tus servicios</h3>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default LoNuevo
