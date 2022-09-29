import Image from "next/image";
import Template from "../components/Template";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from '../styles/Conocimiento.module.css'
import html from '../public/img/HTML.svg'
import css from '../public/img/CSS.svg'
import sass from '../public/img/Sass.svg'
import wordpress from '../public/img/Wordpress.svg'
import js from '../public/img/JS.svg'
import php from '../public/img/PHP.svg'
import python from '../public/img/Python.svg'
import react from '../public/img/React JS.svg'
import native from '../public/img/React Native.svg'
import electron from '../public/img/Electron.svg'
import nextjs from '../public/img/NextJS.svg'
import gatsby from '../public/img/Gatsby.svg'
import sql from '../public/img/SQL V1.svg'
import graphql from '../public/img/GraphQL.svg'
import mongo from '../public/img/Mondo.svg'
import node from '../public/img/Node JS.svg'

const conocimientos = () => {
  return (
    <Template
      pages="conocimiento"
    >
      <Header />
      <main className={styles.contenedor}>
        <div className={styles.conocimiento}>
          <h1>Conocimientos</h1>

          <div className={styles.marketing}>
            <h2>Marketing</h2>

            <p>
            Marketing comprende varias metodologías para realizar el trabajo, con este se crean las estrategias bases dentro de keon
            </p>

            <div>
              <ul className={styles.lista}>
                <li>Marketing digital </li>
                <li>Inbound marketing </li>
                <li>Marketing de fidelizacion </li>
                <li>Neuromarketing </li>
                <li>Marketing cross channel </li>
                <li>Email marketing</li>
              </ul>
            </div>
          </div>

          <div className={styles.disign}>
            <h2>Diseño</h2>

            <p>Conocemos varias metodologias para hacer <b>diseños artisticos</b> donde con estos podemos darle un toque unico a nuestros proyectos, con esto todos los diseños e iconografia son de nuestra elaboracion</p>


            <div>
              <ul className={styles.lista}>
                <li>
                  Ser capaces de representar gráficamente las ideas de los demás departamentos, cumpliendo los requisitos o sugerencias que se mencionen.
                </li>
                <li>
                  El uso de distintos programas que permitan realizar diferentes clases de diseños gráficos, principalmente Illustrator y Photoshop.
                </li>
                <li>
                  Transmitir por medio de las obras realizadas, un mensaje que puede estar explícito o implícito, en la imagen o en una frase. 
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.programacion}>
            <h2>Programacion</h2>

            <p>Manejamos varios lenguajes de programacion que nos permiten darle vida a los proyectos</p>

            <div className={styles.lenguajes}>
              <h3>Lenguajes</h3>

              <div className={styles.cards}>
                <div className={styles.card}>

                  <div className={styles.cardImagen}>
                    <Image src={html} width={200} height={200} />
                  </div>

                  <div className={styles.cardTitulo}>
                    <h4>HTML</h4>
                  </div>

                </div>

                <div className={styles.card}>

                  <div className={styles.cardImagen}>
                    <Image src={css} width={200} height={200} />
                  </div>

                  <div className={styles.cardTitulo}>
                    <h4>css</h4>
                  </div>
                </div>

                <div className={styles.card}>
                  <div className={styles.cardImagen}>
                    <Image src={sass} width={200} height={200} />
                  </div>

                  <div className={styles.cardTitulo}>
                    <h4>sass</h4>
                  </div>
                </div>

                <div className={styles.card}>

                  <div className={styles.cardImagen}>
                    <Image src={wordpress} width={200} height={200} />
                  </div>

                  <div className={styles.cardTitulo}>
                    <h4>WordPress</h4>
                  </div>

                </div>

                <div className={styles.card}>

                  <div className={styles.cardImagen}>
                    <Image src={js} width={200} height={200} />
                  </div>

                  <div className={styles.cardTitulo}>
                    <h4>JavaScript</h4>
                  </div>

                </div>

                <div className={styles.card}>

                  <div className={styles.cardImagen}>
                    <Image src={php} width={200} height={200} />
                  </div>

                  <div className={styles.cardTitulo}>
                    <h4>PHP</h4>
                  </div>

                </div>

                <div className={styles.card}>

                  <div className={styles.cardImagen}>
                    <Image src={python} width={200} height={200} />
                  </div>

                  <div className={styles.cardTitulo}>
                    <h4>Python</h4>
                  </div>

                </div>

                <div className={styles.card}>

                  <div className={styles.cardImagen}>
                    <Image src={react} width={200} height={200} />
                  </div>

                  <div className={styles.cardTitulo}>
                    <h4>react</h4>
                  </div>

                </div>

                <div className={styles.card}>

                  <div className={styles.cardImagen}>
                    <Image src={native} width={200} height={200} />
                  </div>

                  <div className={styles.cardTitulo}>
                    <h4>react native</h4>
                  </div>

                </div>

                <div className={styles.card}>

                  <div className={styles.cardImagen}>
                    <Image src={nextjs} width={200} height={200} />
                  </div>

                  <div className={styles.cardTitulo}>
                    <h4>nextjs</h4>
                  </div>

                </div>

                <div className={styles.card}>

                  <div className={styles.cardImagen}>
                    <Image src={gatsby} width={200} height={200} />
                  </div>

                  <div className={styles.cardTitulo}>
                    <h4>Gatsby</h4>
                  </div>

                </div>

                <div className={styles.card}>

                  <div className={styles.cardImagen}>
                    <Image src={electron} width={200} height={200} />
                  </div>

                  <div className={styles.cardTitulo}>
                    <h4>electron</h4>
                  </div>

                </div>

                <div className={styles.card}>

                  <div className={styles.cardImagen}>
                    <Image src={sql} width={200} height={200} />
                  </div>

                  <div className={styles.cardTitulo}>
                    <h4>sql</h4>
                  </div>

                </div>

                <div className={styles.card}>

                  <div className={styles.cardImagen}>
                    <Image src={graphql} width={200} height={200} />
                  </div>

                  <div className={styles.cardTitulo}>
                    <h4>graphql</h4>
                  </div>

                </div>

                <div className={styles.card}>

                  <div className={styles.cardImagen}>
                    <Image src={node} width={200} height={200} />
                  </div>

                  <div className={styles.cardTitulo}>
                    <h4>node js</h4>
                  </div>

                </div>

                <div className={styles.card}>

                  <div className={styles.cardImagen}>
                    <Image src={mongo} width={200} height={200} />
                  </div>

                  <div className={styles.cardTitulo}>
                    <h4>Mongo</h4>
                  </div>

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

export default conocimientos;
