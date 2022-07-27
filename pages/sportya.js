import Image from 'next/image'
import Template from "../components/Template";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from '../styles/Sportya.module.css'
import login from '../public/img/login.jpg'
import perfil from '../public/img/principal.jpg'
import imagen from '../public/img/imagen.jpg'

const sportya = () => {
  return (
    <Template
      pages="sportya"
    >
      <Header />
      <main className={styles.container}>


        <div className={styles.titulo}>
          <h1>sportya</h1>

          <p>Sportya Es una aplicacion que nace con el fin de crear una red social para deportistas donde se dan a conocer en sus lugares y poder llegar lejos con el poder que dan las redes sociales viendo el factor social de que muchos personas de variedades de edad se quieren dedicar al deporte pero no tienen la capacidad de hacerce conocer Nace esta idea</p>
        </div>

        <div className={styles.deportistas}>

          <div>
            <h2>Deportistas</h2>

            <p>Una gran parte de los deportistas que conoceremos como talentos en la aplicacion tiene problemas a la hora de poder hacerce conocer entre varios equipos y personas con esta red social buscamos solucionar esa problematica solo mediante un registro
            </p>

          </div>

          <div>
            <Image src={login} />
          </div>

        </div>


        <div className={styles.principal}>
          <div>
            <Image src={perfil} />
          </div>

          <div>
            <h2>Equipos</h2>

            <p>Buscamos tener varios equipos en nuestra aplicacion donde los usuarios puedan cojer experiencia y ademas de asi a darse conocer frente a nuevas posibilidades y que logren su meta de ser deportistas por eso contamos con un apartado donde podran poner todo su experiencia y informacion</p>
          </div>
        </div>

        <div className={styles.aplicacion}>
          <div>
            <h2>La aplicacion</h2>

            <p>
              La aplacion va contar con varios apartados donde se podra realizar varias acciones como para la entretencion del usuario como ver eventos, ofertas de equipos y entre otras cosas para que el usuario pueda estar en la aplicacion que lo va impulsar en la estrategias que lo ayudar a crecer , contamos con estrategias de marketing que ayudaran al usuario
            </p>
          </div>

          <div>
            <Image src={imagen} />
          </div>
        </div>


        <div className={styles.pronto}>
          <h2>
            ¡Pronto mas informacion!
          </h2>
        </div>
      </main>
      <Footer />
    </Template>
  );
};

export default sportya;