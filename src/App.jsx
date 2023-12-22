import React from "react";
import Nav from "./components/Nav";
import logo from "./icons/logo.png"; // Importe a imagem
import Styles from '../src/index.module.css';
import Perfil from "./components/Perfil";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Contatos from "./components/Contatos";


function App() {
  return (
    <>
      <header className={Styles.mainHeader}>
        <img className={Styles.logo2} src={logo} alt="Logo" /> {/* Use o atributo src com o caminho da imagem */}

        <nav className={Styles.nav}>
          <Nav />
        </nav>
      </header>
      <Perfil />
      <Sobre />
      <Projetos />
      <Contatos />
      <footer>Desenvolvido por Laysa Diniz 2023</footer>
    </>
  );
}

export default App;
