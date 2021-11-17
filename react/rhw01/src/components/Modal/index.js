import { PureComponent } from "react";
import App from "../../App";
import styles from './Modal.module.scss';


class Modal extends PureComponent {
  render () {
    const { title, text, hideFn, id } = this.props;
    return (
      <div className={styles.ModalBackground} onClick={e => {
        if (e.currentTarget === e.target) hideFn(e, id);
      }}>
        <div className={styles.Modal}>
          <header className={styles.ModalHeader}><h2>{title}</h2><button onClick={e => hideFn(e, id)}>&#10761;</button></header>
          <div className={styles.ModalContent}>
            <p>{text}</p>
            <div>
              <button>OK</button>
              <button>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;