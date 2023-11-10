import { createPortal } from "react-dom";

import styles from './modal.module.scss'
import {FC, ReactNode, useEffect, useState} from "react";
import {clsx} from "clsx";

const modalContainer = document.querySelector('#modals') as Element;

interface ModalProps {
  title?: string;
  children: ReactNode;
  onClose: () => void;
  modalState: boolean;
}

interface ModalOpenState {
  isOpen: boolean;
  isOpenSync: boolean;
}

const Modal: FC<ModalProps> = ({ title, children, modalState, onClose }) => {
  const [localModalState, setLocalModalState] = useState<ModalOpenState>({ isOpen: modalState, isOpenSync: modalState });

  const handleModalClose = () => {
    onClose()
  }

  useEffect(() => {
    setLocalModalState(prev => {
      prev.isOpen = modalState;
      return { ...prev }
    })

    setTimeout(() => {
      setLocalModalState(prev => {
        prev.isOpenSync = modalState;
        return { ...prev }
      })
    },350)
  }, [modalState]);

  if (!modalState && !localModalState.isOpen && !localModalState.isOpenSync) return null;

  const modalStyles = clsx({
    [`${styles.modal}`]: true,
    [styles.modal_status_open]: localModalState.isOpen
  })

  return createPortal(
    (
      <div className={modalStyles}>
        <div className={styles.modal__background} onClick={handleModalClose}/>
        <div className={styles.modal__content}>
          <div>
            { title && <p className={styles.modal__title}>{title}</p> }
            { children }
          </div>
        </div>
      </div>
    ), modalContainer
  )
};

export default Modal;
