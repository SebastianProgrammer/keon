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
                            soy sebastian iral valencia Actualmente trabajo como ing de software, Lider de keon y del departamento de programacion, soy una persona muy creativa
                            soy el fundado de esta iniciativa de empredimiento donde podremos hacer varias ideas tambien soy el creador
                            de la idea sportya de los temas que me gusta trabajar es desarollador de software , machine learning , mecanica
                            y fisica y apasionado de estudio personal
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