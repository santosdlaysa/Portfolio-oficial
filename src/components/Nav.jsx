import Styles from "../index.module.css";
import React from "react";
import { Link } from "react-router-dom"; // Add the missing import statement

import logo from "../icons/logo.png";

function Nav() {
  return (
    <nav>
      <Link to="/">
        {" "}
        <img className={Styles.logo2} src={logo} alt="Logo" />
      </Link>
      <ul>
        <li>
          <Link to="./perfil" className={Styles.navButtons}>
            Perfil
          </Link>
        </li>
        <li>
          <Link to="./sobre" className={Styles.navButtons}>
            Sobre
          </Link>
        </li>
        <li>
          {" "}
          <Link to="./projetos" className={Styles.navButtons}>
            Projetos
          </Link>
        </li>
        <li>
          {" "}
          <Link to="./contatos" className={Styles.navButtons}>
            Contatos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
