import Styles from '../index.module.css';
function Nav(){
    return(
        <>
             <nav>
        <a href="#home" className={Styles.navButtons}>Home</a>
        <a href="#tecnologias" className={Styles.navButtons}>Tecnologias</a>
        <a href="#sobre" className={Styles.navButtons}>Sobre mim</a>
        <a href="#contatos" className={Styles.navButtons}>Contatos</a>
        <a href="#projetos" className={Styles.buttonProjeto}>Projetos</a>
      </nav>
      <div class="nav__btns">
        <i class="uil uil-moon change-theme" id="theme-button"></i>
        </div>
        </>
        
    );

}

export default Nav;