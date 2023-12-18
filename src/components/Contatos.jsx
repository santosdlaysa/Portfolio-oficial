import Styles from '../index.module.css';
import buttom1 from "../icons/linkedin (1).png";
import buttom2 from "../icons/github.png";
import buttom3 from "../icons/instagram.png";
import buttom4 from "../icons/icons8-pdf-50.png";
import Cv from "../icons/Currículo - DEV.pdf";

function Contatos(){
    return (
        <>
        <div className={Styles.Contatos}>
            <h2 className={Styles.contatos_h2}>Contatos 💻​</h2>
            <p className={Styles.contatos_p}>Me encontre e fale comigo nessas redes sociais:</p>
            <div className={Styles.WrapperButtonsContato}>
                <a href="https://www.linkedin.com/in/laysadiniz" className={Styles.buttonContato}>
                    <img src={buttom1} alt="icon"/>Linkedin
                </a>
                <a href="https://github.com/santosdlaysa" className={Styles.buttonContato}>
                    <img src={buttom2} alt="icon"/>GitHub
                </a>
                <a href="https://www.instagram.com/santosdlaysa" className={Styles.buttonContato}>
                    <img src={buttom3} alt="icon"/>Instagram
                </a>
                <a href={Cv} className={Styles.buttonContato}>
                    <img src={buttom4} alt="icon"/> Curriculum
                </a>
                </div>
            </div>
        </>
    )
}

export default Contatos;