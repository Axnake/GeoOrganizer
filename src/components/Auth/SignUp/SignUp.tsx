import {FC} from "react";

import styles from "./SignUp.module.scss";
import {Link} from "react-router-dom";

const SignUp: FC<any> = () => {
    const hadlerSubmit = (event: any) => {
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
                        <Link className={styles.link} to='/auth/sign-in'>
                            <span className={styles.link1}>Есть аккаунт? </span>
                            <span className={styles.link2}>Авторизоваться</span>
                        </Link>
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

export default SignUp;