import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

const Atencion = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid bg-gradient-primary-rev">
        <div className="row">
          <div className="col-lg col-sm d-flex py-5">
            <div className="container text-primary fw-bold my-auto">
              <h2 className="fw-bold my-4">Contáctanos</h2>
              <p className="ms-2">
                Ponemos a tu disposición distintos canales de contacto, para apoyarte en lo que necesites.
              </p>
              <div className="container d-flex">
                <div className="bg-primary rounded-start mx-2">
                <button className="btn text-light">
                  Banca telefónica
                </button>
                </div>
                <div className="bg-primary rounded-end mx-2">
                <button className="btn text-light">
                  +58 212-555-5555
                </button>
                </div>
                
              </div>
            </div>
          </div>
          <div className="col-lg col-sm d-flex">
            <div className="container text-primary fw-bold my-auto">
              <p className="text-center fs-3">
                También puedes enviarnos tus inquietudes a través de nuestro correo electrónico info@bancouniversitario.com.ve
              </p>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Atencion
