import Template from "../../components/Template";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from '../../styles/Grupo.module.css'

const sara = () => {
    return (
        <Template
            pages="sara"
        >
            <Header />
            <main className={styles.persona}>
                <div className={styles.contenedor}>
                    <h1>Sara Acevedo Gomez</h1>
                    <p>Colider</p>

                    <div className={styles.sobremi}>
                        <h2>Sobre Mi</h2>

                        <p>
                            Soy sara Acevedo Gómez colider del departamento de marketing y mis funciones son la ejecución y diseño de estrategias en la atracción de promesas deportivas.
                            Actualmente me encuentro estudiando ingeniería administrativa en la institución universitaria Pascual Bravo, donde soy representante a nivel deportivo como nadadora.
                            A nivel personal me considero una persona responsable, apta para la labor de equipo, creativa, comunicativa, dedicada y con una excelente actitud positiva.

                        </p>



                        <p><span>Edad</span>: 19</p>
                    </div>

                    <div className={styles.habilidades}>
                        <h2>Habilidades</h2>

                        <ul>
                            <li>Marketing Digital</li>
                            <li>Natacion</li>
                        </ul>
                    </div>

                    <div className={styles.hobbies}>
                        <h2>Hobbies</h2>

                        <p>Dibujo</p>
                        <p>Leer</p>
                    </div>
                </div>
            </main>
            <Footer />
        </Template>
    );
}

export default sara;