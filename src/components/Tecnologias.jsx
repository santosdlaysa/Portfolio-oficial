import React from 'react'; // Importa o módulo React

import Styles from '../index.module.css';
import Imghtml from "../icons/imght.svg";
import Imgcss from "../icons/vscode-icons_file-type-css.svg";
import Imgjs from "../icons/vscode-icons_file-type-js-official.svg";
import Imgreact from "../icons/logos_react.svg";
import Imgvue from "../icons/icons8-vue-js.svg";
import Imgvscode from "../icons/vscode-icons_file-type-vscode.svg";
import Imggithub from "../icons/akar-icons_github-fill.svg";

class Tecnologias extends React.Component { // Declara o componente como uma classe
    render() {
        return (
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
        );
    }
}

export default Tecnologias;