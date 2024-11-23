import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import imgTalleres from "../assets/img/Talleres.png";
export const MasInfo = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid row bg-gradient-primary">
        <div className="col-8">
          <img
            className="img-fluid m-5"
            style={{ opacity: 0.5 }}
            src={imgTalleres}
            alt=""
          />
        </div>
        <div className="col-4">
          <div className="m-5">
            <h2 className="text-primary text-center fw-bold">
              Talleres y charlas sobre ahorro, inversiones y el uso responsable
              del crédito.
            </h2>
            <p className="text-center text-primary">
              ¡Inscripciones próximamente!<br></br>Contáctanos por nuestras
              Redes Sociales y a través de +58 212-555-555
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MasInfo;
