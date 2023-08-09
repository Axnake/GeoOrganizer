import styles from './Title.module.scss';
import icon from "../../assets/icon.svg";
import leftAngle from "../../assets/rightAngle.svg";
import rightAngle from "../../assets/leftAngle.svg";

function Title() {
    return (
        <div className={styles.container}>
            <img className={styles.icon} src={icon} alt = ''/>
            <img className={styles.leftAngle} src={leftAngle} alt = ''/>
            <img className={styles.rightAngle} src={rightAngle} alt = ''/>
            <h1 className={styles.title}>Geo <br /> Organizer</h1>
        </div>
    );
}

export {Title};