import { useState } from 'react';
import { PiSelectionInverseFill } from 'react-icons/pi';
import '/portfoliohs/src/componentes/estilo/estilo.css';

function Temas() {
  const [tema, setTema] = useState<'claro' | 'escuro'>('claro');
  const alternarTema = () => {
      setTema('escuro');
  };

  return (
      <div className={`corpo ${tema}`}>
          <button onClick={alternarTema} className="corpo">
              <PiSelectionInverseFill size={25} />
          </button>
      </div>
  );
}

export default Temas;