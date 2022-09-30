import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useState } from "react";
const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false)
  return (
    <div className={styles.contenedor}>
      <div className={styles.header_content}>
        <div className={styles.titulo}>
          <Link href="/">
            <h2  className="pointer">Keon</h2>
          </Link>
        </div>
        <button className={styles.btn_menu} onClick={()=> setDisplayMenu((open)=>!open)}>
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="38" height="38" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
        </button>
      </div>
      {displayMenu && 
      <div>

        <nav  className={styles.nav_col}>
          <Link href="/">
            <a>Principal</a>
          </Link>
          <Link href="/integrantes">
            <a>Integrantes</a>
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
      }
      <div>
        <nav  className={styles.navegacion}>
          <Link href="/">
            <a>Principal</a>
          </Link>
          <Link href="/integrantes">
            <a>Integrantes</a>
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

export default Header;
