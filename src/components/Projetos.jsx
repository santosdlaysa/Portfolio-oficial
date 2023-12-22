import Styles from "../index.module.css";
import Foto1 from "../icons/visualpage.png";
import Foto2 from "../icons/coffe-tela.png";
import Foto3 from "../icons/Imagem-login.png";

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
                            <p className={Styles.portfolio_description}>Prática de front-end, desafio de 7 dias desenvolvendo uma página web com HTML5 e CSS3 a partir de um layout no Figma. conceitos básicos como 'div', 'section', inline para imagens, medidas responsivas em CSS, além de coisas mais avançadas como Flexbox, Grid e muitos outros - Desafiado por Giovanna Moeller - Alura</p>  
            </div>

        <div className={Styles.section_container_1}>
            <a href="https://santosdlaysa.github.io/lay-coffe/" ><h3>Menu de cafeteria</h3></a>
            
            <img src={Foto2} alt="coffe-tela" className={Styles.telas} />

            <p className={Styles.portfolio_description}>Uma tela de cardapio de uma cafeteria com diversos tipos de café e bolos. Desenvolvido com VueJs</p>

        </div>
   
            <div className={Styles.section_container_1}>
                <a href="https://santosdlaysa.github.io/tela-de-login/" ><h3>Tela de login de estética</h3></a>
                <img src={Foto3} alt="tela-de-login" className={Styles.telas} />
                <p className={Styles.portfolio_description}>Desenvolvido um web site de cadastro de profissionais de estéticas com tela de e cadastro em JavaScript</p>
            </div>
        </div>  
</div>
        </>
        
    )
}

export default Projetos;