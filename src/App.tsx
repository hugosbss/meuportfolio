import './App.css';
import Cabecalho from './componentes/cabecalho/cabecalho';
import './componentes/estilo/estilo.css';
import Rodape from './componentes/rodape/rodape';
import Sobre from './componentes/sobre/sobre';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cabecalho/>
      </header>

      <main className='corpo'>
        <Sobre/>
      </main>

      <Rodape/>
    </div>
  );
}

export default App;
