import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";

function Rodape (){
    return(
        <div className="rodape">
        <a href="https://github.com/hugosbss?tab=repositories">
        <AiFillGithub size={32} color="black"/>

        </a>
        <a href="https://www.linkedin.com/in/hugo-wg-silva23/">
        <AiFillLinkedin size={32} color="blue"/>

        </a>
        <a href="https://wa.me/+5514988365367">
        <AiOutlineWhatsApp size={32} color="green"/>

        </a>
      </div>          
    )
}

export default Rodape;