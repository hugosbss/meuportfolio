import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";

function Rodape (){
    return(
        <div className="rodape">
        <a href="https://github.com/hugosbss?tab=repositories">
        <AiFillGithub />

        </a>
        <a href="https://www.linkedin.com/in/hugo-wg-silva23/">
        <AiFillLinkedin />

        </a>
        <a href="https://wa.me/+5514988365367">
        <AiOutlineWhatsApp />

        </a>
      </div>          
    )
}

export default Rodape;