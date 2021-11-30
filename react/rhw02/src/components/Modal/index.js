import { PureComponent } from "react";
import styles from './Modal.module.scss';


class Modal extends PureComponent {

  render () {
    const { actionFn, title, text, hasCloseButton, hideFn } = this.props;
    const optionalCeneterd = {
      'justifyContent': hasCloseButton ? 'space-between' : 'center',
    }
    return (
      <div className={styles.ModalBackground} onClick={() => hideFn()}>
        <div className={styles.Modal} onClick={e => e.stopPropagation()}>
          <header className={styles.ModalHeader} style={optionalCeneterd}>
            <h2>{title}</h2>
            {hasCloseButton && <button onClick={() => hideFn()}>&#10761;</button>}
          </header>
          <div className={styles.ModalContent}>
            <p>{text}</p>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;