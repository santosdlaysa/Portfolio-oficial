import React from "react";
import Nav from "./components/Nav";
import Perfil from "./components/Perfil";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Contatos from "./components/Contatos";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Perfil />
      <Sobre />
      <Projetos />
      <Contatos />
      <Footer />
    </>
  );
}

export default App;
