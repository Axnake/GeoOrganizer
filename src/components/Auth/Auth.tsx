import styles from './Auth.module.scss'
import {BottomLinks} from "../BottomLinks";
import {FormVariant} from "../../containers/StartPage/types.ts";

interface AuthProps {
    currentForm: FormVariant
    setCurrentForm: (value: FormVariant) => void
}
function Auth({currentForm, setCurrentForm}: AuthProps) {
    function hadlerSubmit(event: any) {
        event.preventDefault()
        console.log("click submit")
    }

    return (
        <>
            <form  onSubmit={hadlerSubmit} className={styles.container}>
                <h2 className={styles.title}>Вход</h2>
                <input className={styles.input} type="text" placeholder="Почта"/>
                <input className={styles.input} type="password" placeholder="Пароль"/>
                <button
                    className={styles.button}
                    type="submit"
                >
                    Войти
                </button>
            </form>

            <BottomLinks currentForm={currentForm} setCurrentForm={setCurrentForm}/>
        </>

    );
}

export {Auth};