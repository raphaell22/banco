
import Carousel from 'react-bootstrap/Carousel';

export function ImageCarousel ()  {
  return (
    <Carousel indicators={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="First slide"
          style={{ height: "400px" }} // Establece el tamaño deseado
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Second slide"
          style={{ height: "400px" }} // Establece el tamaño deseado
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Agrega más Carousel.Items según sea necesario */}
    </Carousel>
  );
}


