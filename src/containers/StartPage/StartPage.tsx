import Title from "../../components/Title";

import { FC } from "react";

import styles from './StartPage.module.scss';
import Routes from "../../routes/routes.tsx";


const StartPage: FC<any> = () => {


    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Title />
                <Routes />
            </div>
        </div>
    );
}

export default StartPage;