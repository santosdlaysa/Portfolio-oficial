
    import React from 'react';
    import Styles from '../index.module.css';

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
                </div>
            </div>
            </>
        )
    }

    export default Sobre;
