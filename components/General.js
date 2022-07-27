import { useRef, useEffect } from "react";
import Typed from "typed.js";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import team from "../public/img/team.svg";

const General = () => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Innovando con cada proyecto",
        "Dando Vida a las Ideas",
        "Cambiando Todo Lo Posible...",
      ],
      typeSpeed: 70,
      backSpeed: 50,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <div className={styles.general}>
      <div className={styles.texto}>
        <h1 className={styles.titulo}>Keon</h1>
        <div className={styles.typed}>
          <span style={{ whiteSpace: "pre" }} ref={el} />
        </div>
        <div className={styles.parrafo}>
          <p>Tratando de Cambiar el Mundo con Esfuerzo</p>
        </div>
      </div>

      <div>
        <Image src={team} alt="imagen" width={600} />
      </div>
    </div>
  );
};

export default General;
