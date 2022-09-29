import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import reaices from "../public/img/header.jpg";

const Conocimientos = () => {
  return (
    <div className={styles.fondoNegro}>
      <div className={styles.conocimientos}>
        <h3>Conocimientos</h3>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div>
              <h4>Area de Programacion</h4>

              <p>
                Dominamos varios lenguajes como <b>JavaScript, PHP, Python</b> y
                tecnologías que nos permiten <b>hacer realidad nuestros sueños</b>  y
                trabajar mejor todas las ideas como React, Nextjs, Nodejs buscando la forma
                correcta de hacer cambios
              </p>
            </div>

            <div className={styles.extras}>
              <h4>Actual Trabajo</h4>

              <p>
              Estamos desarrollando una aplicación llamada <b>Sportya</b> con tecnologías como Nextjs y React native para así sacar <b>una app versátil</b>  que todos puedan usar
              </p>
            </div>

            <div className={styles.extras}>
              <h4>Metas</h4>

              <p>
              Actualmente, estamos aprendiendo sobre <b> machine learning y blockchain </b> para dar mejor uso de los datos y ayudar a mejorar nuestros proyectos
              </p>
            </div>

            <div>
              <Link href="/conocimientos">
                <a className="btn btn-indigo btn-end">Ver Conocimientos</a>
              </Link>
            </div>
          </div>

          <div className={styles.card}>
            <h4>Area de Diseño</h4>

            <div>
              <p>
                Realizamos diseños y obras artísticas con aplicaciones y
                programas como <b>Illustrator y Photoshop</b> , las cuales, por su
                versatilidad e interfaz amigable, permiten crear diseños
                atractivos y creativos.
              </p>
            </div>

            <div className={styles.extras}>
              <h4>Actual Trabajo</h4>

              <p>
              Crear iconografía y demás elementos para la aplicación para que sean sobrios y minimalistas. Además, crear <b>diseños inspiradores</b>  para los usuarios de Sportya
              </p>
            </div>

            <div className={styles.extras}>
              <h4>Metas</h4>

              <p>
                Estamos aprendiendo nuevas técnicas y conocimientos, con el fin
                de <b>mejorar</b> como departamento para crear obras y diseños que 
                <b> inspiren y cautiven</b> a nuestros usuarios
              </p>
            </div>

            <Link href="/conocimientos">
              <a className="btn btn-indigo btn-end">Ver Conocimientos</a>
            </Link>
          </div>

          <div className={styles.card}>
            <h4>Area de Marketing</h4>

            <p>
              Nuestros conocimientos se basan en marketing digital, de la cual
              otorgamos <b> una mejor conexión con nuestros talentos</b>, por lo que
              también nos enfocamos en el marketing de fidelización, donde
              podemos brindar un mayor <b>confort y seguridad</b> a las personas que
              utilicen nuestra aplicación.
            </p>

            <div className={styles.extras}>
              <h4>Actual Trabajo</h4>

              <p>
              Actualmente, con relación al trabajo de marketing <b>se han desarrollado estrategias</b> que permitan la buena difusión para la <b>obtención de nuevos Talentos deportivos</b> dentro de nuestra aplicación, y de esta forma reforzar nuestra calidad de servicio con investigaciones que <b>satisfagan a nuestros deportistas.</b> 
              </p>
            </div>

            <div className={styles.extras}>
              <h4>Metas</h4>

              <p>
              Tenemos como objetivo la mejora a nivel investigativo, con el apoyo de clases de marketing que nos ayuden en la <b>estructura y creación de estrategias</b>  que busquen la <b>innovación</b> tanto a nivel empresarial como en el ámbito de los consumidores.
              </p>
            </div>

           
            <div>
              <Link href="/conocimientos">
                <a className="btn btn-indigo">Ver Conocimientos</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conocimientos;
