import {FC, useState} from "react";
import {Link} from "react-router-dom";
import {useForm, ValidationRule} from "react-hook-form";
import { toast } from 'react-toastify';


import Modal from "../../Modal";
import UploadAvatar from "../../UploadAvatar";


import styles from "./SignUp.module.scss";


interface IFormValues {
    firstName: string;
    lastName: string;
    fathersName: string;
    nickName: string;
    phoneNumber: ValidationRule<RegExp>;
    email: string;
    password: string;
    checkPassword: string;
    data: string;
    preview: string;
}
const SignUp: FC = () => {
    const [preview, setPreview] = useState(null)
    const {
        register,
        watch,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<IFormValues>({
        mode: "onBlur",
    })
    const notify = () => {
        toast.success('Регистрация прошла успешно', {
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
        alert(JSON.stringify({...data, preview}))
        notify()
    }
    const [modalActive, setModalActive] = useState(false)



    return (

        <>
            <form className={styles.container} onSubmit={handleSubmit(onSubmit)} >
                <h2 className={styles.title}>Регистрация</h2>
                <div className={styles.blockContainer}>
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
                                maxLength: {
                                    value: 20,
                                    message: "Поле должно содержать не более 20 символов"
                                },
                            })}
                            className={styles.input}
                            type="text"
                            placeholder="Имя"
                        />
                        <div className={styles.error}>
                            {errors?.firstName && <span>{errors?.firstName?.message}</span>}
                        </div>


                        {/*lastName*/}
                        <input
                            {...register("lastName", {
                                required: "Поле обязательно к заполнению",
                                pattern: {
                                    value: /^[a-zA-Zа-яА-Я]+$/i,
                                    message: "В поле должны быть только буквы"
                                },
                                maxLength: {
                                    value: 20,
                                    message: "Поле должно содержать не более 20 символов"
                                },
                            })}
                            className={styles.input}
                            type="text"
                            placeholder="Фамилия"
                        />
                        <div className={styles.error}>
                            {errors?.lastName && <p>{errors?.lastName?.message}</p>}
                        </div>


                        {/*fathersName*/}
                        <input
                            {...register("fathersName", {
                                pattern: {
                                    value: /^[a-zA-Zа-яА-Я]+$/i,
                                    message: "В поле должны быть только буквы"
                                },
                                maxLength: {
                                    value: 30,
                                    message: "Поле должно содержать не более 30 символов"
                                },
                            })}
                            className={styles.input}
                            type="text"
                            placeholder="Отчество"
                        />
                        <div className={styles.error}>
                            {errors?.fathersName && <p>{errors?.fathersName?.message}</p>}
                        </div>


                        {/*nickName*/}
                        <input
                            {...register("nickName", {
                                required: "Поле обязательно к заполнению",
                                maxLength: {
                                    value: 25,
                                    message: "Поле должно содержать не более 25 символов"
                                },
                            })}
                            className={styles.input}
                            type="text"
                            placeholder="Никнейм"
                        />
                        <div className={styles.error}>
                            {errors?.nickName && <p>{errors?.nickName?.message}</p>}
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
                                pattern: /^(\+7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/
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
                            {errors?.password && <p>{errors?.password?.message || "Поле должно содержать не менее 8 символов, включая букву и цифру"}</p>}
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
                            {errors?.checkPassword && <p>{errors?.checkPassword?.message}</p>}
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