import { PureComponent } from "react";
import styles from './Modal.module.scss';
import PropTypes from 'prop-types';


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
              <button onClick={() => {
                actionFn();
                hideFn();
              }}>Yes</button>
              <button onClick={() => hideFn()}>No</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  actionFn: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  hideFn: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  hasCloseButton: PropTypes.bool,
}

Modal.defaultProps = {
  hasCloseButton: true
}

export default Modal;