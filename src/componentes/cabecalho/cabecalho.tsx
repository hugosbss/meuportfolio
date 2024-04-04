import Texto from "../texto/texto";

function Cabecalho(){

    return(
        <div className="cabecalho">

            <img
                src="/mft.jpeg"  
                alt="perfil" 
                className="perfil"
            /> 

            <div className="texto">
                <Texto/>
            </div>


        </div>
    )
    
}

export default Cabecalho;