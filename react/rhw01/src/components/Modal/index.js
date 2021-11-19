import { PureComponent } from "react";
import styles from './Modal.module.scss';


class Modal extends PureComponent {
  render () {
    const { title, text, hideFn, id, hasCloseButton, actions } = this.props;
    const optionalCeneterd = {
      'justifyContent': hasCloseButton ? 'space-between' : 'center',
    }
    return (
      <div className={styles.ModalBackground} onClick={() => hideFn(id)}>
        <div className={styles.Modal} onClick={e => e.stopPropagation()}>
          <header className={styles.ModalHeader} style={optionalCeneterd}>
            <h2>{title}</h2>
            {hasCloseButton && <button onClick={() => hideFn(id)}>&#10761;</button>}
          </header>
          <div className={styles.ModalContent}>
            <p>{text}</p>
            <div>
              {actions?.length > 0 && actions[0]}
              {actions?.length > 1 && actions[1]}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;