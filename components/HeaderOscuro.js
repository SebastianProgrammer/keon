import Link from "next/link";
import styles from "../styles/HeaderOscuro.module.css"

const HeaderOscuro = () => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.titulo}>
        <Link href="/">
          <h2  className="pointer">Keon</h2>
        </Link>
      </div>

      <div>
        <nav  className={styles.navegacion}>
          <Link href="/">
            <a>Principal</a>
          </Link>
          <Link href="/integrantes">
            <a>Intregantes</a>
          </Link>
          <Link href="/conocimientos">
            <a>Conocimientos</a>
          </Link>
          
            <Link href="/sportya">
              <a className={styles.botonRosado}>SportYa</a>
            </Link>
            <Link href="/contacto">
              <a className={styles.boton}>Contacto</a>
            </Link>
          
        </nav>
      </div>
    </div>
  );
};

export default HeaderOscuro;