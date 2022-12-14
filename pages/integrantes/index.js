import useRouter from "next/router";
import Link from "next/link";
import Image from 'next/image'
import { Animated } from "react-animated-css";
import Template from "../../components/Template";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/Grupo.module.css";
import dario from '../../public/img/dario.png'
import rata from '../../public/img/rata.png'
import sara from '../../public/img/sara.png'
import darlinton from '../../public/img/darlinton.png'
import danilo from '../../public/img/danilo.png'


const integrantes = () => {
  return (
    <Template pages="integrantes">
      <Header />
      <main className={styles.container}>
        <div className={styles.informacion}>
          <h1>Grupo De Keon</h1>

          <p>
          Contamos con un grupo pequeño, pero diverso, donde el trabajo ha ido mejorando para mejorar los proyectos donde estamos y poder hacer los sueños realidad
          </p>

          <div>
            <div className={styles.integrantes}>
              <h2>integrantes</h2>

              <div className={styles.lideres}>
                <h3>Lideres</h3>
                <div className={styles.cards}>
                  <div className={styles.card}>
                    {" "}
                    {/* Inicio del card */}
                    <div className={styles.cardImagen}>
                      <h3>Coming Soon!</h3>
                    </div>
                    <div className={styles.cardInfo}>
                      <h3>Sebastian Iral Valencia</h3>
                      <p className="no-margin">
                        <span>Cargo</span>: Lider - Lider Programacion
                      </p>
                      <p>
                      Actual líder del emprendimiento Keon, desempeña este rol encargandose de las relaciones comerciales y de generar estrategias administrativas.
                      </p>
                    </div>
                    <div className={styles.cardBtn}>
                      <Link href="/integrantes/sebastian">
                        <a className="btn btn-rosado">Ver a Sebastian</a>
                      </Link>
                    </div>
                  </div>{" "}
                  {/* Fin del card */}
                  <div className={styles.card}>
                    {" "}
                    {/* Inicio del card */}
                    <div className={styles.cardImagen}>
                      <Image src={dario} width={450} height={350} layout="responsive" />
                    </div>
                    <div className={styles.cardInfo}>
                      <h3>Oscar Eduardo Madrid Anaya</h3>
                      <p className="no-margin">
                        <span>Cargo</span>: Colider de Keon
                      </p>
                      <p>
                      Actual colider de keon encargado mejorar las relaciones internas y las relaciones personales de la empresa, actualmente cumple con este rol.
                      </p>
                    </div>
                    <div className={styles.cardBtn}>
                      <Link href="/integrantes/oscar">
                        <a className="btn btn-rosado">Ver a Oscar</a>
                      </Link>
                    </div>
                  </div>{" "}
                  {/* Fin del card */}
                </div>
              </div>

              <div className={styles.marketing}>
                <h3>marketing</h3>
                <div className={styles.cards}>
                  <div className={styles.card}>
                    {" "}
                    {/* Inicio del card */}
                    <div className={styles.cardImagen}>
                      <Image src={rata} width={450} height={350} layout="responsive" />
                    </div>
                    <div className={styles.cardInfo}>
                      <h3>Kevin Patiño Arango</h3>
                      <p className="no-margin">
                        <span>Cargo</span>: Lider de Marketing
                      </p>
                      <p>
                      Encargado de las estrategias de marketing para conseguir usuarios dentro de Sportya crea, además, analiza lo que se tenga que implementar en cada una de estas y su desarrollo.
                      </p>
                    </div>
                    <div className={styles.cardBtn}>
                      <Link href="/integrantes/kevin">
                        <a className="btn btn-rosado">Ver a Kevin</a>
                      </Link>
                    </div>
                  </div>{" "}
                  {/* Fin del card */}

                  <div className={styles.card}>
                    {" "}
                    {/* Inicio del card */}
                    <div className={styles.cardImagen}>
                      <Image src={sara} width={450} height={350} layout="responsive" />
                    </div>

                    <div className={styles.cardInfo}>
                      <h3>Sara Acevedo Gomez</h3>
                      <p className="no-margin">
                        <span>Cargo</span>: Colider de Marketing
                      </p>
                      <p>
                      Ayudar a fortalecer las estrategias de marketing, además de esto es la que se encarga de los contenidos de las redes sociales, dándole toques únicos a nuestros medios de comunicación y creación de temas.
                      </p>
                    </div>
                    <div className={styles.cardBtn}>
                      <Link href="/integrantes/sara">
                        <a className="btn btn-rosado">Ver a Sara</a>
                      </Link>
                    </div>
                  </div>{" "}
                  {/* Fin del card */}
                </div>
              </div>

              <div className={styles.disign}>
                <h3>Diseño</h3>
                <div className={styles.cards}>
                  <div className={styles.card}>
                    {" "}
                    {/* Inicio del card */}
                    <div className={styles.cardImagen}>
                      <h3>Coming Soon!</h3>
                    </div>
                    <div className={styles.cardInfo}>
                      <h3>Silvana Lynch</h3>
                      <p className="no-margin">
                        <span>Cargo</span>: Lider de Diseño
                      </p>
                      <p>
                      Se encarga de darle un toque artístico a Keon además de esto, es la que hace la mayoría de imágenes de la mascota y demás trabajos artísticos.
                      </p>
                    </div>
                    <div className={styles.cardBtn}>
                      <Link href="/integrantes/silvana">
                        <a className="btn btn-rosado">Ver a Silvana</a>
                      </Link>
                    </div>
                  </div>{" "}
                  {/* Fin del card */}

                  <div className={styles.card}>
                    {" "}
                    {/* Inicio del card */}
                    <div className={styles.cardImagen}>
                      <Image src={darlinton} width={450} height={350} layout="responsive" />
                    </div>

                    <div className={styles.cardInfo}>
                      <h3>Darlinton Pulgarin Roldan</h3>
                      <p className="no-margin">
                        <span>Cargo</span>: Colider de Diseño
                      </p>
                      <p>
                      Ha creado la iconografía que ayuda a perfeccionar el diseño de los temas de los proyectos con un estilo único.
                      </p>
                    </div>
                    <div className={styles.cardBtn}>
                      <Link href="/integrantes/darliton">
                        <a className="btn btn-rosado">Ver a Darlinton</a>
                      </Link>
                    </div>
                  </div>{" "}
                  {/* Fin del card */}
                </div>
              </div>

              <div className={styles.programacion}>
                <h3>Programacion</h3>
                <div className={styles.cards}>
                 
                  <div className={styles.card}>
                    {" "}
                    {/* Inicio del card */}
                    <div className={styles.cardImagen}>
                      <Image src={danilo} width={450} height={350} layout="responsive" />
                    </div>

                    <div className={styles.cardInfo}>
                      <h3>Danilo Gomez Rios</h3>
                      <p className="no-margin">
                        <span>Cargo</span>: Colider de Programacion
                      </p>
                      <p>
                      Encargado del desarrollo y operación de la aplicación web y móvil para establecer un correcto funcionamiento de la misma.
                      </p>
                    </div>
                    <div className={styles.cardBtn}>
                      <Link href="/integrantes/danilo">
                        <a className="btn btn-rosado">Ver a Danilo</a>
                      </Link>
                    </div>
                  </div>{" "}
                  {/* Fin del card */}
                  <div className={styles.card}>
                    {" "}
                    {/* Inicio del card */}
                    <div className={styles.cardImagen}>
                      <h3>Coming Soon!</h3>
                    </div>
                    <div className={styles.cardInfo}>
                      <h3>Santiago Mira Arango</h3>
                      <p className="no-margin">
                        <span>Cargo</span>: Miembro De Programacion
                      </p>
                      <p>
                      Encargado de diseño web, ayuda a mejoras estéticas de la página con el fin de que sean amigables para mejorar la experiencia de los usuarios.
                      </p>
                    </div>
                    <div className={styles.cardBtn}>
                      <Link href="/integrantes/santiago">
                        <a className="btn btn-rosado">Ver a Santiago</a>
                      </Link>
                    </div>
                  </div>{" "}
                  {/* Fin del card */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </Template>
  );
};

export default integrantes;
