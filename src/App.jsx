import React from "react";
import Nav from "./components/Nav";
import Perfil from "./components/Perfil";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Contatos from "./components/Contatos";


function App() {
  return (
    <>
      <Nav />
      <Perfil />
      <Sobre />
      <Projetos />
      <Contatos />
      <footer>Desenvolvido por Laysa Diniz 2023</footer>
    </>
  );
}

export default App;
