import React from 'react'
import styles from './styles.module.css'

export const Modal = ({ isOpen, onClose, title, children }) => {

    if (!isOpen) return

    return (
        <dialog className={styles.dialogModal} open onClose={onClose}>
            <h2 className={styles.modalTitle}>{title}</h2>
            <div className={styles.modalBody}>
                {children}
            </div>
            <button onClick={onClose}>Fechar</button>

        </dialog>
    )
}
