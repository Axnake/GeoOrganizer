import styles from './Modal.module.scss'
import cn from 'classnames'
function Modal({active, setActive, children}) {
    return (
        <div
            className={(active) ? cn(styles.modal, styles.active) : cn(styles.modal)}
            onClick={() => setActive(false)}
        >
            <div
                className={(active) ? cn(styles.modal__content, styles.active) : cn(styles.modal__content)}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
}

export default Modal;