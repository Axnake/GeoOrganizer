import {FC, useState} from "react";
import {Link} from "react-router-dom";

import Modal from "../../Modal";
import UploadAvatar from "../../UploadAvatar";

import { useForm } from "react-hook-form";

import styles from "./SignUp.module.scss";


type FormValues = {
    firstName: string;
    lastName: string;
    fathersName: string;
    nickName: string;
    phoneNumber: string;
    email: string;
    password: string;
    checkPassword: string;
    data: string;
    preview: string;
};
const SignUp: FC = () => {
    const [preview, setPreview] = useState(null)
    const {
        register,
        watch,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FormValues>({
        mode: "onBlur",
    })
    const onSubmit = (data: object) => alert(JSON.stringify({...data, preview}))
    const [modalActive, setModalActive] = useState(false)
    return (

        <>
            <form className={styles.container} onSubmit={handleSubmit(onSubmit)} >
                <h2 className={styles.title}>Регистрация</h2>
                <div className={styles.block__container}>
                    <div
                        className={styles.left}
                    >
                        {/*firstName*/}
                        <input
                            {...register("firstName", {
                                required: "Поле обязательно к заполнению",
                                pattern: {
                                    value: /^[a-zA-Zа-яА-Я]+$/i,
                                    message: "В поле должны быть только буквы"
                                },
                                minLength: {
                                    value: 2,
                                    message: "Не менее 2 символов"
                                },
                                maxLength: {
                                    value: 15,
                                    message: "Не более 15 символов"
                                },
                            })}
                            className={styles.input}
                            type="text"
                            placeholder="Имя"
                        />
                        <div className={styles.error}>
                            {errors?.firstName && <span>{errors?.firstName?.message || "Некорректное имя"}</span>}
                        </div>


                        {/*lastName*/}
                        <input
                            {...register("lastName", {
                                required: "Поле обязательно к заполнению",
                                pattern: {
                                    value: /^[a-zA-Zа-яА-Я]+$/i,
                                    message: "В поле должны быть только буквы"
                                },
                                minLength: {
                                    value: 2,
                                    message: "Не менее 2 символов"
                                },
                                maxLength: {
                                    value: 15,
                                    message: "Не более 15 символов"
                                },
                            })}
                            className={styles.input}
                            type="text"
                            placeholder="Фамилия"
                        />
                        <div className={styles.error}>
                            {errors?.lastName && <p>{errors?.lastName?.message || "Некорректная фамилия"}</p>}
                        </div>


                        {/*fathersName*/}
                        <input
                            {...register("fathersName", {
                                pattern: {
                                    value: /^[a-zA-Zа-яА-Я]+$/i,
                                    message: "В поле должны быть только буквы"
                                },
                                minLength: {
                                    value: 2,
                                    message: "Не менее 2 символов"
                                },
                                maxLength: {
                                    value: 15,
                                    message: "Не более 15 символов"
                                },
                            })}
                            className={styles.input}
                            type="text"
                            placeholder="Отчество (необязательно)"
                        />
                        <div className={styles.error}>
                            {errors?.fathersName && <p>{errors?.fathersName?.message || "Некорректное отчество"}</p>}
                        </div>


                        {/*nickName*/}
                        <input
                            {...register("nickName", {
                                required: "Поле обязательно к заполнению",
                                minLength: 4,
                            })}
                            className={styles.input}
                            type="text"
                            placeholder="Никнейм"
                        />
                        <div className={styles.error}>
                            {errors?.nickName && <p>{errors?.nickName?.message || "Поле не соответствует требованиям"}</p>}
                        </div>
                        <button
                            className={styles.button}
                            type="submit"
                        >
                            Зарегистрироваться
                        </button>

                    </div>
                    <div
                        className={styles.right}
                    >

                        {/*phoneNumber*/}
                        <input
                            {...register("phoneNumber", {
                                required: "Поле обязательно к заполнению",
                                minLength: 11,
                                maxLength: 11
                            })}
                            className={styles.input}
                            type="tel"
                            placeholder="Номер телефона"
                        />
                        <div className={styles.error}>
                            {errors?.phoneNumber && <p>{errors?.phoneNumber?.message || "Некорректный номер телефона"}</p>}
                        </div>


                        {/*email*/}
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


                        {/*password*/}
                        <input
                            {...register("password", {
                                required: "Поле обязательно к заполнению",
                                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                            })}
                            className={styles.input}
                            type="password"
                            placeholder="Пароль"
                        />
                        <div className={styles.error}>
                            {errors?.password && <p>{errors?.password?.message || "Пароль должен содержать не менее 8 символов, включая хотя бы одну букву и одну цифру"}</p>}
                        </div>


                        {/*checkPassword*/}
                        <input
                            {...register("checkPassword", {
                                required: "Поле обязательно к заполнению",
                                validate: (value) => {
                                    if (watch('password') !== value){
                                        return "Пароль не совпадает"
                                    }
                                }
                            })}
                            className={styles.input}
                            type="password"
                            placeholder="Повторите пароль"
                        />
                        <div className={styles.error}>
                            {errors?.checkPassword && <p>{errors?.checkPassword?.message || "Поле не соответствует требованиям"}</p>}
                        </div>
                        <div>
                            {/*Модалка*/}
                            <button
                                type="button"
                                className={styles.button}
                                onClick={ () => setModalActive(true)}
                            >
                                Загрузить фото
                            </button>
                            <Modal active={modalActive} setActive={setModalActive}>
                                <UploadAvatar preview={preview} setPreview={setPreview}/>
                            </Modal>
                        </div>

                    </div>

                </div>
                <Link className={styles.link} to='/auth/sign-in'>
                    <span className={styles.link1}>Есть аккаунт? </span>
                    <span className={styles.link2}>Авторизоваться</span>
                </Link>

            </form>

        </>
    );
}

export default SignUp;