import styles from "./Reg.module.scss";
import {BottomLinks} from "../BottomLinks";
import {FormVariant} from "../../containers/StartPage/types.ts";

interface RegProps {
    currentForm: FormVariant
    setCurrentForm: (value: FormVariant) => void
}
function Reg( { currentForm, setCurrentForm }: RegProps) {
    function hadlerSubmit(event: any) {
        event.preventDefault()
        console.log("click submit")
    }
    return (

        <>
            <form  onSubmit={hadlerSubmit} className={styles.container}>
                <h2 className={styles.title}>Регистрация</h2>
                <div className={styles.block__container}>
                    <div className={styles.left}>
                        <input className={styles.input} required type="text" placeholder="Имя"/>
                        <input className={styles.input} required type="text" placeholder="Фамилия"/>
                        <input className={styles.input} type="text" placeholder="Отчество"/>
                        <input className={styles.input} required type="text" placeholder="Никнейм"/>

                        <button
                            className={styles.button}
                            type="submit"
                        >
                            Зарегистрироваться
                        </button>

                        <div className={styles.link}>
                            <BottomLinks currentForm={currentForm} setCurrentForm={setCurrentForm}/>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <input className={styles.input} required type="text" placeholder="Номер телефона"/>
                        <input className={styles.input} required type="text" placeholder="Почта"/>
                        <input className={styles.input} required type="password" placeholder="Пароль"/>
                        <input className={styles.input} required type="password" placeholder="Повторите пароль"/>
                        <label className={styles.input__file}>
                            <input type="file"/>
                            <span>Загрузить фото</span>
                        </label>


                    </div>
                </div>

            </form>

        </>
    );
}

export {Reg};