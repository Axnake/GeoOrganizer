import styles from './Modal.module.scss'
import cn from 'classnames'
import React, {FC} from "react";

interface IModal {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode
}
const Modal: FC<IModal> = ({active, setActive, children}) => {
    const closeModal = () => {
        setActive(false);
    };
    return (
        <div
            className={(active) ? cn(styles.modal, styles.active) : cn(styles.modal)}

        >

            <div
                className={(active) ? cn(styles.modal__content, styles.active) : cn(styles.modal__content)}
                onClick={e => e.stopPropagation()}
            >
                {children}

                <button
                    className={styles.button}
                    type='button'
                    onClick={closeModal}
                >
                    Сохранить
                </button>

            </div>
        </div>
    );
}
export default Modal;