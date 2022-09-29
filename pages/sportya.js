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
          <h1>Sportya</h1>

          <p>Sportya Es una aplicación que nace con el fin de crear una <b>red social para deportistas</b> donde se dan a conocer en sus lugares y poder llegar lejos con el poder que dan las redes sociales, viendo el factor social de que muchas personas de variedades de edad se <b>quieren dedicar al deporte</b> , pero no tienen la capacidad de hacerse conocer, de ahí nace esta idea</p>
        </div>

        <div className={styles.deportistas}>

          <div>
            <h2>Deportistas</h2>

            <p>Una gran parte de los deportistas que conoceremos como talentos en la aplicación, tienen problemas a la hora de poder <b>hacerse conocer entre varios equipos y personas</b> , con esta red social buscamos solucionar esa problemática solo mediante un registro
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

            <p>Buscamos tener varios equipos en nuestra aplicación donde los usuarios puedan coger experiencia y además de así a <b>darse conocer frente a nuevas posibilidades</b>  y que logren su meta de <b>ser deportistas</b>, por eso contamos con un apartado donde podrán poner todo su experiencia e información</p>
          </div>
        </div>

        <div className={styles.aplicacion}>
          <div>
            <h2>La aplicacion</h2>

            <p>
            La aplicación va a contar con varios apartados donde se podrá realizar varias acciones como para el entretenimiento del usuario como <b>ver eventos, ofertas de equipos y entre otras cosas</b>  para que el usuario pueda estar en la aplicación que lo va a impulsar, en las <b>estrategias que lo ayudarán a crecer</b>, para esto contamos con estrategias de marketing que ayudaran al usuario
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