import React, { ReactNode, useState } from 'react';
import { PiSelectionInverseFill } from 'react-icons/pi';
import '/meuportfolio/src/componentes/estilo/estilo.css';

interface TemasProps {
  children: ReactNode;
}

function Temas({ children }: TemasProps) {
  const [tema, setTema] = useState<'claro' | 'escuro'>('claro');
  const alternarTema = () => {
    setTema(tema === 'claro' ? 'escuro' : 'claro');
  };

  return (
    <div className={`corpo ${tema}`}>
      <button onClick={alternarTema} className="botao">
        <PiSelectionInverseFill size={25} />
      </button>
      {children}
    </div>
  );
}

export default Temas;