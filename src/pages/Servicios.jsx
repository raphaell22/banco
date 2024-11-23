import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import manService from "../assets/img/manServicios.png";
const Servicios = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid bg-gradient-primary-rev">
        <div className="row">
          <div className="col-lg col-sm d-flex">
            <div className="container text-primary text-center fw-bold my-auto">
              <h2 className="fw-bold my-4">Servicios</h2>
              <img src={manService}/>
            </div>
          </div>
          <div className="col-lg col-sm d-flex">
            <div className="container text-primary fw-bold my-auto">
              <h5 className="fw-bold">Banca en linea</h5>
              <ul className="">
                <li>¡Realiza tus transacciones a tiempo real!</li>
              </ul>
              <h5 className="fw-bold">
                ¿Conoces los servicios que Banco Universitario tiene para ti?
              </h5>
              <ul>
                <li>Transferencias múltiples</li>
                <li>Histórico de transferencias</li>
                <li>Cambio de clave</li>
                <li>Administración de becas</li>
                <li>Descargar referencias bancarias</li>
                <li>Pago móvil web</li>
                <li>Pago de impuestos</li>
                <li>Pago de servicios</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Servicios
