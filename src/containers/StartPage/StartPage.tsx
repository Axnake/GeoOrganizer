import styles from './StartPage.module.scss';
import {Title} from "../../components/Title";
import {Auth} from "../../components/Auth";
import {useState} from "react";
import {Reg} from "../../components/Reg";
import {FormVariant} from "./types.ts";

// import {Reg} from "../../components/Reg";

function StartPage() {
    const [currentForm, setCurrentForm] = useState(FormVariant.registration)
    const form = currentForm === FormVariant.registration ? <Reg currentForm={currentForm} setCurrentForm={setCurrentForm}/> : <Auth currentForm={currentForm} setCurrentForm={setCurrentForm}/>

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Title />
                {/*<Reg />*/}
                {/*<Auth />*/}

                {form}
            </div>
        </div>
    );
}

export { StartPage };