import Template from "../../components/Template";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from '../../styles/Grupo.module.css'

const kevin = () => {
    return (
        <Template
            pages="danilo"
        >
            <Header />
            <main className={styles.persona}>
                <div className={styles.contenedor}>
                    <h1>Danilo Gomez Rios</h1>
                    <p>Colider de Programacion</p>

                    <div className={styles.sobremi}>
                        <h2>Sobre Mi</h2>

                        <p>
                            Mi nombre es Danilo Gómez ríos, soy del área de programación y me considero una persona resolutiva, con buen animo y listo para enfrentar los desafíos de la empresa, constantemente me actualizo en el tema de la tecnología para brindar mejores soluciones a mi equipo de trabajo. Además de trabajar en tecnología, también me estudiando química industrial en le ITM
                        </p>


                        <p><span>Edad</span>: 21</p>
                    </div>

                    <div className={styles.habilidades}>
                        <h2>Habilidades</h2>

                        <ul>
                            <li>Programacion</li>
                            <li>Tocar Guitarra y Piano</li>
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