import Link from 'next/link';
import styles from '../styles/Home.module.css'

const SportYa = () => {
  return (
    <div className={styles.sportya}>
      <h2>SportYa</h2>

      <p>
      Siendo desarrollada desde 2021, Sportya es una aplicación encargada de ofrecer una plataforma para <b>compartir videos, metas y sueños,</b> donde talentos deportivos podrán compartir sus habilidades con otros deportistas. Estos pueden tener <b> la oportunidad de ser contactados por equipos </b> que se encuentren interesados en reclutar nuevos Talentos.
      </p>

      <div >
        <Link href="/sportya">
          <a className='btn btn-rosado'>SportYa</a>
        </Link>
      </div>
    </div>
  );
};

export default SportYa;
