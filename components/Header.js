import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useState } from "react";
import menu_icon from '../public/img/menuicon.svg'
import Image from "next/image";
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
            <Image src={menu_icon} width={38} height={38}></Image>
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
