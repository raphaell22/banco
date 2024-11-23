import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import imgMision from "../assets/img/mision.png";
import imgVision from "../assets/img/vision.png";
import imgObjetivos from "../assets/img/objetivos.png";
const SomosBanco = () => {
  const backgroundGradient = {
    bottom: {
      background: "linear-gradient(to bottom, #ffffff 20%, #085f63)",
    },
    left: {
      background: "linear-gradient(to left, #ffffff 25%, rgba(8, 95, 99, 0.5))",
    },
    right: {
      background:
        "linear-gradient(to right, #ffffff 25%, rgba(8, 95, 99, 0.5))",
    },
  };

  return (
    <div style={backgroundGradient.bottom}>
      <Navbar />
      <h2 className="text-center text-primary fw-bold mt-3 mb-3">
        Filosofía de Gestión
      </h2>
      <div className="container mb-3">
        <div className="row mb-2">
          <div style={backgroundGradient.left} className="col-lg col-sm p-2 ps-4">
            <h3 className="text-primary fw-bold">Misión</h3>
            <p className="text-primary mt-4">
              Brindar a los estudiantes universitarios una experiencia bancaria
              excepcional, a través de soluciones financieras innovadoras,
              accesibles y personalizadas, que les permitan alcanzar sus metas
              académicas y personales.
            </p>
          </div>
          <div className="col-lg col-sm p-0">
            <img src={imgMision} className="img-fluid w-100 opacity-75" />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-lg col-sm p-0">
            <img src={imgVision} className="img-fluid opacity-75" />
          </div>
          <div style={backgroundGradient.right} className="col-lg col-sm p-2 ps-4">
            <h3 className="text-primary fw-bold">Visión</h3>
            <p className="text-primary mt-4">
              Ser el banco universitario líder en la región, reconocido por su
              compromiso con la innovación, la excelencia en el servicio y el
              apoyo integral al desarrollo financiero de los estudiantes.
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg col-sm">
            <img src={imgObjetivos} className="img-fluid p-2 opacity-75" />
          </div>
          <div className="col-lg col-sm">
            <h2 className="text-primary fw-bold mb-3">Objetivos</h2>
            <ul>
              <li className="mb-4">
                Brindar una experiencia online completa y satisfactoria para los
                clientes, satisfaciendo todas sus necesidades bancarias.
              </li>
              <li className="mb-4">
                Proteger la información de los clientes y garantizar un acceso
                fluido a la banca online para optimizar su experiencia.
              </li>
              <li className="mb-4">
                Ampliar la oferta de servicios de banca remota para facilitar
                las transacciones de los clientes.
              </li>
              <li className="mb-4">
                Facilitar la actualización de información de contacto y
                credenciales para que los clientes mantengan sus datos seguros y
                su acceso fluido.
              </li>
              <li className="mb-4">
                Fomentar la transparencia institucional mediante la publicación
                de información clara y accesible sobre nuestros principios,
                valores y canales de contacto.
              </li>
              <li className="mb-4">
                Facilitar transferencias seguras y rápidas a través de una lista
                de contactos frecuentes para optimizar la experiencia de los
                clientes.
              </li>
              <li className="mb-4">
                Permitir a los clientes consultar su información financiera en
                tiempo real para una mejor gestión de sus finanzas.
              </li>
              <li className="mb-4">
                Diseñar un entorno de transacciones intuitivo, accesible y
                compatible con diversas tecnologías para garantizar la inclusión
                de todos los usuarios.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SomosBanco;
