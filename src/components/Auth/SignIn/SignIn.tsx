import {FC} from "react";
import {Link} from "react-router-dom";



import styles from "./SignIn.module.scss"

const SignIn: FC <any> = () => {
    const hadlerSubmit = (event: any) => {
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
                <Link className={styles.link} to='/auth/sign-up'>
                    <span className={styles.link1}>Нет аккаунта? </span>
                    <span className={styles.link2}>Зарегистрироваться</span>
                </Link>
            </form>
        </>

    );
}

export default SignIn;