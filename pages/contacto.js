import Link from "next/link";
import Image from "next/image";
import Template from "../components/Template";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from '../styles/Contacto.module.css'
import Facebook from '../public/img/Facebook.svg'
import instagram from '../public/img/instagram.svg'

const contacto = () => {
  return (
    <Template>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.titulo}>Contacto</h1>
        <div className={styles.formulario}>
          <form >
            <h2>Escribenos Acerca de Cualquier duda o Proyecto</h2>

            <div className={styles.campo}>
              <input
                type="text"
                placeholder="nombre completo"
              />
            </div>

            <div className={styles.campo}>
              <input
                type="email"
                placeholder="Correo"
              />
            </div>

            <div
              className={styles.textarea}
            >
              <textarea
                placeholder="mensaje"
              />
            </div>
          </form>

          <div className={styles.redes}>
            <div>
              <Link href="https://www.facebook.com/K-EON-109418178487322/">
                <Image src={Facebook} />
              </Link>
            </div>

            <div>
              <Link href="https://instagram.com/keonsas?igshid=YmMyMTA2M2Y=">
                <Image src={instagram} />
              </Link>
            </div>
          </div>

          <div>
            <button
              className="btn btn-rosado"
            >Enviar</button>
          </div>

        </div>
      </main>
      <Footer />
    </Template>
  );
};

export default contacto;