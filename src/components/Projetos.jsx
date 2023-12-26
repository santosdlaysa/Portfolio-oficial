import Styles from "../index.module.css";
import Foto1 from "../icons/visualpage.png";
import Foto2 from "../icons/coffe-tela.png";
import Foto3 from "../icons/Imagem-login.png";
import Foto4 from "../icons/relogiojs.png";


function Projetos(){
    return (
        <>
        <div className={Styles.projetos}>
            <div className={Styles.container_text}>
            <h2 className={Styles.text_1}>Meus projetos pessoais 🚀</h2>
           <p className={Styles.text}>No decorrer dos meus estudos na área desenvolvir alguns projetos para por a mão nos códigos, foram alguns simples e outros mais complexos.</p>
        </div>

        <div className={Styles.container_project}>
            <div className={Styles.section_container_1}>
                <a href="https://santosdlaysa.github.io/website/" > <h3>Site de recrutamento</h3></a>
                        <img src={Foto1} alt="website" className={Styles.telas}/>
                          
            </div>

        <div className={Styles.section_container_1}>
            <a href="https://santosdlaysa.github.io/lay-coffe/" ><h3>Menu de cafeteria</h3></a>
            
            <img src={Foto2} alt="coffe-tela" className={Styles.telas} />


        </div>
   
            <div className={Styles.section_container_1}>
                <a href="https://santosdlaysa.github.io/tela-de-login/" ><h3>Tela de login de estética</h3></a>
                <img src={Foto3} alt="tela-de-login" className={Styles.telas} />
            </div>
            <div className={Styles.section_container_1}>
                <a href="https://santosdlaysa.github.io/RelogioDigital/" ><h3>Relógio Digital</h3></a>
                <img src={Foto4} alt="relogio-digital" className={Styles.telas} />
            </div>
        </div>  
        
</div>
        </>
        
    )
}

export default Projetos;