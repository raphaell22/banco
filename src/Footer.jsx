// Footer.js
import twitter from './icons/twitter.png';
import facebook from './icons/facebook.png';
import instagram from './icons/instagram.png';
import whatsapp from './icons/whatsapp.png';
import arroba from './icons/arroba.png';



export function Footer  ()  {
  return (
    <footer className="footer bg-light text-center border-top border-primary mt-4">
      <div className="container-fluid row">
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div>
            <h3>Siguenos en:</h3>
            <a href="https://www.x.com/bancouniversitariove" target="_blank" rel="noopener noreferrer">
              <img className="me-2" src={twitter} width={64} height={64} alt="Twitter" />
            </a>
            <a href="https://www.facebook.com/bancouniversitariove" target="_blank" rel="noopener noreferrer">
  <img className='me-2' src={facebook} width={64} height={64} alt="Facebook" />
</a>
<a href="https://www.instagram.com/bancouniversitariove" target="_blank" rel="noopener noreferrer">
  <img className='me-2' src={instagram} width={64} height={64} alt="Instagram" />
</a>
<a href="https://www.wa.me/+58 212-555-5555" target="_blank" rel="noopener noreferrer">
  <img className='me-2' src={whatsapp} width={64} height={64} alt="Whatsapp" />
</a>
<a href="https://www.threads.net/bancouniversitariove" target="_blank" rel="noopener noreferrer">
  <img className='me-2' src={arroba} width={64} height={64} alt="Threads" />
</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <h3 className='text-primary'>Dirección</h3>
          <span>Calle 8 de Nueva Segovia</span>
          <h3 className='text-primary'>Teléfono</h3>
          <span>+58 212-555-5555</span>
          <h3 className='text-primary'>Correo</h3>
          <span>info@bancouniversitario.com.ve</span>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 text-lg-end">
          <h2 className='text-primary'>Desarrolladores</h2>
          <ul className='list-unstyled' >
            <li>Rafael Carmona</li>
            <li>Yovani Navas</li>
            <li>Gloria Sanchez</li>
          </ul>
        </div>
      </div>
      <div className="container">
        <span className="text-center text-muted fw-bold">© Banco Universitario, Todos los derechos reservados</span>
      </div>
    </footer >
  );
}


