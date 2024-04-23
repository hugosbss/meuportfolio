import { useEffect, useState } from 'react';
import './App.css';
import Cabecalho from './componentes/cabecalho/cabecalho';
import './componentes/estilo/estilo.css';
import Rodape from './componentes/rodape/rodape';
import Sobre from './componentes/sobre/sobre';
import Temas from './componentes/temas/tema';

function App() {

  const [showFooter, setShowFooter] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowFooter(isBottom);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div  className='corpo'>
      <header className="App-header">
        <Cabecalho/>
      </header>

      <div>
        <Temas>
          <Sobre/>
        </Temas>
      </div>

      <Rodape isVisible={showFooter} />
    </div>
  );
}

export default App;