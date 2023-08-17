import Title from "../../components/Title";

import { FC } from "react";

import styles from './StartPage.module.scss';
import Routers from "../../routes/routes.tsx";
import leftAngle from "../../assets/rightAngle.svg";
import rightAngle from "../../assets/leftAngle.svg";


const StartPage: FC = () => {
    return (
        <>


                <div className={styles.container}>
                    <div className={styles.main}>
                        <img className={styles.leftAngle} src={leftAngle} alt = ''/>
                        <img className={styles.rightAngle} src={rightAngle} alt = ''/>
                        <Title />
                        <Routers />
                    </div>

                </div>

        </>
    );
}

export default StartPage;