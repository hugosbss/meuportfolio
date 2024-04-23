import { FaHtml5 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaPhp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

function Sobre() {
    return (
      <div className="sobre">
        Sobre mim 🤔: <br/><br/>
        <div className="icones">
        💻: <FaHtml5 size={32}/> | <IoLogoCss3 size={32}/> | <FaReact size={32}/> | <FaNode size={32}/> | <RiJavascriptFill size={32}/> | <BiLogoTypescript size={32}/> | <FaPhp size={32}/> | <FaPython size={32}/> <br/> <br/>
        </div>

        🚀 Estou pronto para aplicar meus conhecimentos e crescer profissionalmente em um ambiente desafiador. Se você está em busca de um desenvolvedor dedicado e entusiasmado, estou aqui para contribuir! <br/> <br/>
        🔗 Vamos construir o futuro juntos! Estou aberto a novos desafios e aprendizado contínuo. Se você conhece alguma oportunidade que se alinhe ao meu perfil, ficarei grato pela indicação!
      </div>
    );
  }
  
export default Sobre;