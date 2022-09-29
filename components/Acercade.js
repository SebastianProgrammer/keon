import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import sportya from "../public/img/sportya.svg";
import design from "../public/img/design.svg";
import marketing from "../public/img/marketing.svg";

const Acercade = () => {
  return (
    <div className={styles.acercaDe}>
      <h3>Acerca De</h3>

      <div className={styles.descripcion}>
        <p>
        Nacemos con La idea de ser una empresa que ayude a <b>cambiar el mundo mediante sus proyectos</b>, los cuales actualmente son enfocamos en ideas de <b>programación, tecnología</b> y en un futuro próximo, el desarrollo de múltiples ideas basadas en la diversidad de mentalidades, las cuales buscan el aprovechamiento como equipo y departamentos, por lo que de esta forma el nombre de <b>Keon</b> surge con la idea de brindar el camino como <b>la llave del tiempo</b>, donde se mezclan las palabras key de llave y eon de tiempo.
        </p>
      </div>

      <div className={styles.departamentos}>
        <div className={styles.programacion}>
          <div className={styles.programacionTexto}>
            <h4>Programacion</h4>
            <p>
              Contamos con un departamento de programacion donde estamos
              haciendo realidad <b>nuestro proyecto principal</b>, que es{" "}
              <Link href="/sportya">
                <span>Sportya</span>
              </Link>{" "}
              y donde le damos cavidad a mas proyectos como en esta pagina
            </p>
          </div>

          <div>
            <Image src={sportya} width={450} height={300}></Image>
          </div>
        </div>

        <div className={styles.disign}>
          <div>
            <Image src={design} width={450} height={300}></Image>
          </div>
          <div className={styles.disignTexto}>
            <h4>Diseño</h4>
            <p>
              Este departamento es el encargado de la <b> creación, animación y
              proyección</b> de un sueño llamado{" "}
              <Link href="/sportya">
                <span>Sportya</span>
              </Link>{" "}
              , donde se busca una<b> revolución creativa</b> que cumpla con el
              objetivo de <b>inspirar</b>  a nuestros deportistas para la obtención de
              metas y sueños dentro de nuestra comunidad
            </p>
          </div>
        </div>

        <div className={styles.marketing}>
          <div className={styles.marketingTexto}>
            <h4>Marketing</h4>
            <p>
              El departamento de marketing se encuentra encargado de la 
              <b> investigación, creación y desarrollo de estrategias</b> para la
              obtención de promesas deportivas, donde estas puedan rodearse de
              una comunidad enfocada en el respeto mutuo, <b>el crecimiento
              personal y desarrollo deportivo.</b>
            </p>
          </div>

          <div>
            <Image src={marketing} width={450} height={300}></Image>
          </div>
        </div>

        <div className="izquierda">
          <Link href="/integrantes">
            <a className="btn btn-indigo">Ver Integrantes</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Acercade;
