import Carousel from "react-bootstrap/Carousel";
import img1 from "./assets/img/mejoresCuentas.png";
import imgGraduados from "./assets/img/graduados.png";
import imgGraduate from "./assets/img/becas.png";

export function SlideItem(props) {
  return (
    <div className="container row align-items-center mb-4">
      <div className="offset-lg-2 col-lg col-sm-12 d-flex justify-content-center">
        <div>
          <h2 className="fw-bold text-primary">{props.title}</h2>
          <p className="text-white">{props.text}</p>
        </div>
      </div>
      <div className="col-lg col-sm-12">
        <img
          className="d-block w-100 p-5"
          src={props.src}
          style={{ height: "400px", opacity: 0.5 }}
        />
      </div>
    </div>
  );
}

export function ImageCarousel() {
  return (
    <Carousel interval={null} indicators={true}>
      <Carousel.Item>
        <SlideItem
          title="Conoce más de nuestras cuentas de ahorro"
          text="Lleva un mejor control de tus gastos"
          src={img1}
        />
      </Carousel.Item>
      <Carousel.Item>
        <SlideItem
          title="Comprometidos con la educación y el futuro"
          text="Se parte de Nosotros"
          src={imgGraduados}
        />
      </Carousel.Item>
      <Carousel.Item>
        <SlideItem
          title="Gran variedad de becas y ayudas financieras para ayudarte con tu educación."
          text="Explora nuestras opciones de becas y ayudas"
          src={imgGraduate}
        />
      </Carousel.Item>
    </Carousel>
  );
}
