import Template from "../../components/Template";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from '../../styles/Grupo.module.css'

const oscar = () => {
    return (
        <Template
            pages="oscar"
        >
            <Header />
            <main className={styles.persona}>
                <div className={styles.contenedor}>
                    <h1>Santiago Mira</h1>
                    <p>Integrante de Programacion</p>

                    <div className={styles.sobremi}>
                        <h2>Sobre Mi</h2>

                        <p>
                            Mi nombre es Santiago Arango mira, pertenezco al departamento de programación.
                            Actualmente me encuentro estudiando tecnología en automatización electrónica en el ITM.
                            Me considero una persona simpática, alegre, amable, responsable, también soy bastante cariñoso, soy bueno trabajando en equipo, también soy muy puntual, además de ser bastante optimista. Me gusta bastante programar
                        </p>
                        <p><span>Edad</span>: 20</p>
                    </div>

                    <div className={styles.habilidades}>
                        <h2>Habilidades</h2>

                        <ul>
                            <li>Electronica</li>
                            <li>Programacion</li>
                        </ul>
                    </div>

                    <div className={styles.hobbies}>
                        <h2>Hobbies</h2>

                        <p>Futbol</p>
                        <p>Jugar Videjuegos</p>
                        <p>Dibujo</p>
                        <p>Leer</p>
                    </div>
                </div>
            </main>
            <Footer />
        </Template>
    );
}

export default oscar;