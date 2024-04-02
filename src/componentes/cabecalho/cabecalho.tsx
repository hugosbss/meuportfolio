import Esquerdo from "../sobre/sobre";

function Cabecalho(){
    return(
        <div className="cabecalho">

            <img
                src="/mft.jpeg"  
          alt="perfil" 
          className="perfil"
            /> 

            <div className="texto">
            Hugo Silva <br/>
            Desenvolvedor Fullstack |  react | node  
            </div>

        </div>
    )
    
}

export default Cabecalho;