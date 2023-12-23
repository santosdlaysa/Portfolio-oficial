import Styles from '../index.module.css';
import React from 'react';


function Nav(){
    return(
        <>
             <nav>
        <a href="santosdlaysa.github.io/Portfolio-oficial" className={Styles.navButtons}>Home</a>
        <a href="./Tecnologias" className={Styles.navButtons}>Tecnologias</a>
        <a href="#Sobre" className={Styles.navButtons}>Sobre mim</a>
        <a href="#Contatos" className={Styles.navButtons}>Contatos</a>
        <a href='#projetos' className={Styles.buttonProjeto}>Projetos/</a>
      </nav>
      <div class="nav__btns">
        <i class="uil uil-moon change-theme" id="theme-button"></i>
        </div>
        </>
        
    );

}

export default Nav;