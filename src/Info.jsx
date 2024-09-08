
import bs from './icons/bs.png';
import banco from './icons/banco.png';
import repair from './icons/repair.png';
import scolar from './icons/scolar.png';
import time from './icons/time.png';
import credicard from './icons/credicard.png';
import lock from './icons/lock.png';
import question from './icons/question.png';

export function Info(){
    return (


<div className='container-fluid'>
      <div className="text-center row m-3">
        <button className='col d-flex rounded-start border-0 me-2 btn-md bg-primary text-light p-2' type="button">
          <img className='me-1' src={bs} width={32} height={32} />
          Limites Diarios
        </button>
        <button className='col d-flex me-2 border-0 btn-md bg-primary text-light p-2' type="button">
          <img className='me-1' src={banco} width={32} height={32} />
          Somos Banco Universitario
        </button>
        <button className='col d-flex me-2 border-0 btn-md bg-primary text-light p-2' type="button">
          <img className='me-1' src={repair} width={32} height={32} />
          Servicios
        </button>
        <button className='col d-flex rounded-end border-0 me-2 btn-md bg-primary text-light p-2' type="button">
          <img className='me-1' src={scolar} width={32} height={32} />
          Becas
        </button>
      </div>
      <div className="text-center row m-3">
        <button className='col d-flex rounded-start border-0 me-2 btn-md bg-primary text-light p-2' type="button">
          <img className='me-1' src={time} width={32} height={32} />
          Gestión de Cuentas</button>
        <button className='col d-flex me-2 border-0 btn-md bg-primary text-light p-2' type="button">
          <img className='me-1' src={credicard} width={32} height={32} />
          Pagos / Transferencias</button>
        <button className='col d-flex me-2 border-0 btn-md bg-primary text-light p-2' type="button">
          <img className='me-1' src={lock} width={32} height={32} />
          Seguridad</button>
        <button className='col d-flex rounded-end border-0 me-2 btn-md bg-primary text-light p-2' type="button">
          <img className='me-1' src={question} width={32} height={32} />
          Preguntas Frecuentes</button>
      </div>
    </div>

    );
}