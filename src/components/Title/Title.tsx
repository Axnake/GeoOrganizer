import styles from './Title.module.scss';
import icon from "../../assets/icon.svg";

const Title = () => {
    return (
        <div className={styles.container}>
            <img className={styles.icon} src={icon} alt = ''/>

            <h1 className={styles.title}>Geo <br /> Organizer</h1>
        </div>
    );
}

export default Title;