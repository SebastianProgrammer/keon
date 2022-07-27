import Template from "../../components/Template";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from '../../styles/Grupo.module.css'

const kevin = () => {
    return (
        <Template
            pages="kevin"
        >
            <Header />
            <main className={styles.persona}>
                <div className={styles.contenedor}>
                    <h1>Kevin Patiño Arango</h1>
                    <p>Lider Marketing</p>

                    <div className={styles.sobremi}>
                        <h2>Sobre Mi</h2>

                        <p>
                            Soy Kevin Patiño líder del departamento de marketing, Trabajo con entusiasmo y tengo la motivación necesaria para desempeñar  mis labores, capaz de adaptarme a cualquier situación, me considero una persona sincera, competitivo en cualquier área. Curioso sobre temas que desconozco también curso actualmente la carrera de historia en la upb
                        </p>

                       

                        <p><span>Edad</span>: 21</p>
                    </div>

                    <div className={styles.habilidades}>
                        <h2>Habilidades</h2>

                        <ul>
                            <li>Marketing Digital</li>
                            <li>Liderazgo</li>
                        </ul>
                    </div>

                    <div className={styles.hobbies}>
                        <h2>Hobbies</h2>

                        <p>Jugar Futbol</p>
                        <p>Musica</p>
                        <p>Jugar Videjuegos</p>
                    </div>
                </div>
            </main>
            <Footer />
        </Template>
    );
}

export default kevin;