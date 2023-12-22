
    import React from 'react';
    import Styles from '../index.module.css';
    import Imghtml from "../icons/imght.svg";
import Imgcss from "../icons/vscode-icons_file-type-css.svg";
import Imgjs from "../icons/vscode-icons_file-type-js-official.svg";
import Imgreact from "../icons/logos_react.svg";
import Imgvue from "../icons/icons8-vue-js.svg";
import Imgvscode from "../icons/vscode-icons_file-type-vscode.svg";
import Imggithub from "../icons/akar-icons_github-fill.svg";

    function Sobre(){
        return (
            <>
            <div className={Styles.sobre}>
                <h2 className={Styles.h2sobre}>Sobre mim ​🙋‍♀️​ </h2>
                <div className={Styles.conteudoSobre}>
                    <p className={Styles.textp}>
                        Sou bacharel em Direito com especialização em Direito Penal e Criminologia. Há um ano, migrei para a área de tecnologia da informação e estou cursando Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento Frontend.
                        <br />
                        <br />
                        Tenho interesse por games, viagens, fotografia e sou amante dos animais. Minha transição para a área de tecnologia me permitiu combinar minha paixão por resolver problemas com criatividade e habilidades técnicas, visando construir interfaces de usuário intuitivas e agradáveis. Estou animada com as oportunidades que a tecnologia oferece e espero continuar crescendo como desenvolvedora Frontend.👩‍💻 
                    </p>
                    <div id={Styles.tecnologias}>
                        <h2>Minhas skills <strong>💻</strong></h2>
                             <div className={Styles.icones}>
                                <img src={Imghtml} alt="HTML" className={Styles.icons} />
                                <img src={Imgcss} alt="CSS" className={Styles.icons} />
                                <img src={Imgjs} alt="JavaScript" className={Styles.icons} />
                                <img src={Imgreact} alt="React" className={Styles.icons} />
                                <img src={Imgvue} alt="Vue" className={Styles.icons} />
                                <img src={Imgvscode} alt="VSCode" className={Styles.icons} />
                                <img src={Imggithub} alt="GitHub" className={Styles.icons} />
                </div>
            </div>
                </div>

            </div>
            </>
        )
    }

    export default Sobre;
