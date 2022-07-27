import Template from "../../components/Template";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from '../../styles/Grupo.module.css'

const kevin = () => {
    return (
        <Template
            pages="darlinton"
        >
            <Header />
            <main className={styles.persona}>
                <div className={styles.contenedor}>
                    <h1>Darlinton Pulgarin Roldan</h1>
                    <p>Integrante De Diseño</p>

                    <div className={styles.sobremi}>
                        <h2>Sobre Mi</h2>

                        <p>
                            Mi nombre es Darlinton Pulgarin y tengo 21 años. Actualmente soy estudiante de ingeniería civil en la Universidad de Antioquia y mi cargo en K-Eon es como Colider del departamento de diseño, donde me encargo principalmente de la iconografía y otros trabajos semejantes.
                        </p>

                        <p>Me considero una persona alegre y entusiasmada, diversas personas me han dicho que soy muy serio; a pesar de ser perezoso siempre hago mi mayor esfuerzo de cumplir con mis obligaciones con la mayor exigencia posible. También me considero inteligente y creativo</p>

                        <p>
                            Me apasiona el conocimiento en general y aprender de ello, principalmente el que conlleve física o matemática; me gustaría aprender varios idiomas y tocar varios instrumentos musicales
                        </p>

                        <p><span>Edad</span>: 21</p>
                    </div>

                    <div className={styles.habilidades}>
                        <h2>Habilidades</h2>

                        <ul>
                            <li>Diseño</li>
                            <li>Tocar Guitarra</li>
                            <li>Liderazgo</li>
                            <li>matemática</li>
                        </ul>
                    </div>

                    <div className={styles.hobbies}>
                        <h2>Hobbies</h2>

                        <p>Hacer Deporte</p>
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