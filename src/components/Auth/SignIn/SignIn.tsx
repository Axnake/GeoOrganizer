import {FC} from "react";
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

import styles from "./SignIn.module.scss"

interface IFormValues {
    email: string;
    password: string;
}
const SignIn: FC = () => {

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<IFormValues>({
        mode: "onBlur",
    })
    const notify = () => {
        toast.success('Авторизация прошла успешно', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const onSubmit = (data: object) => {
        alert(JSON.stringify({data}))
        notify()
    }

    return (
        <>
            <form  className={styles.container} onSubmit={handleSubmit(onSubmit)} >
                <h2 className={styles.title}>Вход</h2>
                <input
                    {...register("email", {
                        required: "Поле обязательно к заполнению",
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                    })}
                    className={styles.input}
                    type="text"
                    placeholder="Почта"
                />
                <div className={styles.error}>
                    {errors?.email && <p>{errors?.email?.message || "Не верный формат почты"}</p>}
                </div>
                <input
                    {...register("password", {
                        required: "Поле обязательно к заполнению",
                    })}
                    className={styles.input}
                    type="password"
                    placeholder="Пароль"
                />
                <div className={styles.error}>
                    {errors?.password && <p>{errors?.password?.message}</p>}
                </div>

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