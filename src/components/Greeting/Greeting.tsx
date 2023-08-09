import styles from "./Greeting.module.scss";
import {Loader} from "../Loader";

function Greeting() {
    return (
        <>
            <h6 className={styles.subtitle}>your plans on the map</h6>
            <Loader />
        </>
    );
}

export {Greeting};