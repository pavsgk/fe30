import React from "react";
import styles from './Modal.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../store/actionCreators";


function Modal() {
  
  const dispatch = useDispatch();

  const modal = useSelector(state => state.modal);

  if (!modal.isShown) return null;

  const { actionFn, title, text } = modal;
  const hasCloseButton = true;
  const optionalCeneterd = {
    'justifyContent': hasCloseButton ? 'space-between' : 'center',
  }


  return (
    <div className={styles.ModalBackground} onClick={() => dispatch(hideModal())}>
      <div className={styles.Modal} onClick={e => e.stopPropagation()}>
        <header className={styles.ModalHeader} style={optionalCeneterd}>
          <h2>{title}</h2>
          {hasCloseButton && <button onClick={() => dispatch(hideModal())}>&#10761;</button>}
        </header>
        <div className={styles.ModalContent}>
          <p>{text}</p>
          <div className={styles.ModalControls}>
            <button onClick={() => {
              actionFn();
              dispatch(hideModal())
            }}>Yes</button>
            <button onClick={() => dispatch(hideModal())}>No</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;