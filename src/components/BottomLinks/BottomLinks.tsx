import styles from './BottomLinks.module.scss'
import {FormVariant} from "../../containers/StartPage/types.ts";

interface BottomLinksProps {
    currentForm: FormVariant
    setCurrentForm: (value: FormVariant) => void
}
function BottomLinks({ currentForm, setCurrentForm}: BottomLinksProps) {
    function handlerSwapForm() {
        if (currentForm === FormVariant.registration){
            setCurrentForm(FormVariant.authorization)
        } else {
            setCurrentForm(FormVariant.registration)
        }
    }
    const titleLink = currentForm === FormVariant.registration ? "Авторизоваться" : "Зарегистрироваться"
    const subtitleLink = currentForm === FormVariant.registration ? "Есть аккаунт?" : "Нет аккаунта?"

    return (
        <div className={styles.link} >
            <a href="#">
                    <span
                        className={styles.link1}
                    >
                        {subtitleLink}
                    </span>
                <span
                    className={styles.link2}
                    onClick={handlerSwapForm}
                > {titleLink}
                    </span>
            </a>
        </div>
    );
}

export {BottomLinks};