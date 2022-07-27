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
                    <h1>Oscar Eduardo Madrid Anaya</h1>
                    <p>Colider de Keon</p>

                    <div className={styles.sobremi}>
                        <h2>Sobre Mi</h2>

                        <p>
                            Mi nombres es Oscar Eduardo Madrid Anaya egresado de la corporación censa Medellín en estudios académicos sobre lengua extranjera nivel b2-c1, al momento me encuentro desempeñando funciones como colider, desempeñando labores de crecimiento departamental y conecciones con terceros.
                        </p>

                        <p>
                            En mi persona destaco cualidades como; incentivar el trabajo en equipo, capacidad de liderazgo y coordinación, activa participación en diferentes tipo de proyectos y actividades en los que participe y buen entendimiento con compañeros, además de ser alguien sociable que le gusta compartir sus hobbies con todas las personas, buena comunicación,  expresión y siempre estoy en una búsqueda constante de contruirme cómo individuo y crecer.
                        </p>

                        <p><span>Edad</span>: 20</p>
                    </div>

                    <div className={styles.habilidades}>
                        <h2>Habilidades</h2>

                        <ul>
                            <li>Bilingue</li>
                            <li>Marketing Digital</li>
                            <li>Liderazgo</li>
                        </ul>
                    </div>

                    <div className={styles.hobbies}>
                        <h2>Hobbies</h2>

                        <p>Deportes</p>
                        <p>Dibujar</p>
                        <p>Cocina</p>
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