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
                Dominamos Varios Lenguajes Como Javascript,php,python y
                tecnologias que nos permiten hacer realidad nuestros sueños y
                trabajar mejor todas las ideas como react, nextjs,nodejs buscando la forma
                correcta de hacer cambios
              </p>
            </div>

            <div className={styles.extras}>
              <h4>Actual Trabajo</h4>

              <p>
                Trabajamos desarollando una aplicacion llamada sportya con
                varias tecnologias como nextjs,react native
                asi sacando una app versatil que todos pueden usar
              </p>
            </div>

            <div className={styles.extras}>
              <h4>Metas</h4>

              <p>
                Actualmente estamos aprendiendo sobre machine learning y
                blockchain para dar mejor uso de los datos y ayudar a mejorar
                varios proyectos
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
                programas como Illustrator y Photoshop, las cuales, por su
                versatilidad e interfaz amigable, permiten crear diseños
                atractivos y creativos.
              </p>
            </div>

            <div className={styles.extras}>
              <h4>Actual Trabajo</h4>

              <p>
                Crear iconografia y demás elementos para la aplicación que sean
                sobrios y minimalistas. Además, crear diseños inspiradores para
                los usuarios de Sportya
              </p>
            </div>

            <div className={styles.extras}>
              <h4>Metas</h4>

              <p>
                Estamos aprendiendo nuevas técnicas y conocimientos, con el fin
                de mejorar como departamento para crear obras y diseños que
                inspiren y cautiven a nuestros usuarios
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
              otorgamos una mejor conexión con nuestros talentos, por lo que
              también nos enfocamos en el marketing de fidelización, donde
              podemos brindar un mayor confort y seguridad a las personas que
              utilicen nuestra aplicación.
            </p>

            <div className={styles.extras}>
              <h4>Actual Trabajo</h4>

              <p>
                Actualmente en relación al trabajo de marketing se han
                desarrollado estrategias que permitan la buena difusión para la
                obtención de nuevos Talentos deportivos dentro de nuestra
                aplicación, y de esta forma reforzar nuestra calidad de servicio
                con investigaciones que satisfagan a nuestros deportistas.
              </p>
            </div>

            <div className={styles.extras}>
              <h4>Metas</h4>

              <p>
                Tenemos como objetivo la mejora a nivel investigativo, con el
                apoyo de clases de marketing que nos ayuden en la estructura y
                creación de estrategias que busquen la innovación tanto a nivel
                empresarial como a nivel de consumidores.
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
