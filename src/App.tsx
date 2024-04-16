import './App.css';
import Cabecalho from './componentes/cabecalho/cabecalho';
import './componentes/estilo/estilo.css';
import Rodape from './componentes/rodape/rodape';
import Sobre from './componentes/sobre/sobre';
import Temas from './componentes/temas/tema';

function App() {


  return (
    <div>

      <Cabecalho/>

      <header className="App-header">

        <Temas/>
      
      </header>

      <body className='corpo'>

        <Sobre/>
        <Rodape/>

      </body>
    </div>
  );
}

export default App;