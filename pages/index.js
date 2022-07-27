import Head from "next/head";
import Image from "next/image";
import Template from "../components/Template";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import General from "../components/General";
import Acercade from "../components/Acercade";
import Footer from "../components/Footer";
import Conocimientos from "../components/Conocimientos";
import SportYa from "../components/SportYa";

export default function Home() {
  return (
    <Template
      pages="Principal"
    >
      <main>
        <div>
          <Header />
        </div>
        <div>
          <div>
            <General />
          </div>

          <div className={styles.container}>
            <div>
              <Acercade />
            </div>
          </div>

          <div>
            <Conocimientos />
          </div>

          <div className={styles.container}>
            <div>
              <SportYa />
            </div>
          </div>

          <div className={styles.fondoNegro}>
            <div className={styles.container}>
              <div className={styles.contacto}>
                <h2>Contactarnos Es Facil</h2>

                <p>
                  Puedes contactarnos por correo por el momento para hablarnos de
                  cualquier duda solo escribenos
                </p>

                <div>
                  <button className="btn btn-indigo">Contactar</button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Footer />
          </div>
        </div>
      </main>
    </Template>
  );
}
