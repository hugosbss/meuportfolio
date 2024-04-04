import { useState } from "react";
import { WiSolarEclipse } from "react-icons/wi";


function Temas (){

        const [tema, setTema] = useState('claro');
        const alternarTema = () => {
          setTema(tema === 'claro' ? 'escuro' : 'claro');
    }

    return(
        <div className={`corpo ${tema}`}>
          <button onClick={alternarTema} className="botao"><WiSolarEclipse size={40}  color="orange" /></button>
        </div>
      );
    }

export default Temas;