import Template from "../../components/Template";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from '../../styles/Grupo.module.css'

const sebastian = () => {
    return (
        <Template
            pages="sebastian"
        >
            <Header />
            <main className={styles.persona}>
                <div className={styles.contenedor}>
                    <h1>Sebastian Iral Valencia</h1>
                    <p>Lider de Keon - Lider Programacion</p>

                    <div className={styles.sobremi}>
                        <h2>Sobre Mi</h2>

                        <p>
                        Soy Sebastián iral valencia. Actualmente, trabajo como ingeniero de software, soy el líder de keon y del departamento de programación, soy una persona muy creativa por medio de esta iniciativa de emprendimiento, podremos desarrollar diversas ideas, también soy el creador de la idea Sportya, de los temas que me gusta trabajar es como desarrollador de software, el machine learning , la mecánica, la física y el autoaprendizaje
                        </p>

                        <p><span>Edad</span>: 23</p>
                    </div>

                    <div className={styles.habilidades}>
                        <h2>Habilidades</h2>

                        <ul>
                            <li>Programacion Full stack</li>
                            <li>Mecanica</li>
                            <li>Estadistica</li>
                            <li>Marketing</li>
                            <li>Liderazgo</li>
                        </ul>
                    </div>

                    <div className={styles.hobbies}>
                        <h2>Hobbies</h2>

                        <p>EL Entrenamiento Fisico</p>
                        <p>Karate</p>
                        <p>Baloncesto</p>
                        <p>La Musica</p>
                        <p>Caminar</p>
                        <p>Jugar Videojuegos</p>
                    </div>
                </div>
            </main>
            <Footer />
        </Template>
    );
}

export default sebastian;