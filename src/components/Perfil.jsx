
import Styles from "../index.module.css";
import Profile from "../icons/profile.jpg";

function Perfil() {
    return (
        <>
        <section className={Styles.perfil}>
      <h2>
        Oi ​🙋‍♀️, <br />
        meu nome é Laysa,<br />
        sou <strong>Desenvolvedora Front-end</strong> <br />
        e sou apaixonada por tecnologia
      </h2>
      <img src={Profile} alt="Laysa" id={Styles.fotoperfil} />
    </section>
        </>
    )
}

export default Perfil;

