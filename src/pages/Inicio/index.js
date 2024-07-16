import Banner from '../../componentes/Banner';
import Card from '../../componentes/Card';
import styles from './Inicio.module.css';
import videos from '../../json/db.json';

function Inicio() {
    return (
        <>
            <Banner />
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Inicio;