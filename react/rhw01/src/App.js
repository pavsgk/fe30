import { Component } from 'react';
import styles from './App.module.scss';
import Modal from './components/Modal';

class App extends Component {
  state = {
    modals: {
      0: {
        title: 'Do you want to delete this file?',
        text: 'Once you delete this file, it won’t be possible to undo this action. \n Are you sure you want to delete it?',
        isActive: true,
        hideFn: (evt, id) => this.hideModal(id),
      }
    }
  }

  hideModal(id) {
    this.setState(current => {
      const newState = { ...current };
      newState.modals[id].isActive = false;
      return newState;
    });
  }

  render () {
    const { modals } = this.state;
    const firstModalId = 0;
    return (
    <div className={styles.App}>
      {/* <Modal title={modals[0].title} bgc={modals[0].bgc}/> */}
      {modals[firstModalId].isActive && <Modal {...modals[firstModalId]} id={firstModalId}/>}
    </div>)
  }
}

export default App;
