import { Component } from 'react';
import styles from './App.module.scss';
import Modal from './components/Modal';
import Button from './components/Button';

class App extends Component {
  state = {
    modals: [
      {
        id: 0,
        title: 'Do you want to delete this file?',
        text: 'Once you delete this file, it won’t be possible to undo this action. \n Are you sure you want to delete it?',
        isActive: false,
        hasCloseButton: false,
        hideFn: (id) => this.hideModal(id),
        actions: [
          <Button text='Ok' backgroundColor='#008CBA' onClick={() => {
            alert('Done!');
            this.hideModal(0);
          }} />,
          <Button text='Cancel' backgroundColor='#008CBA' onClick={() => {
            alert('Canceled!');
            this.hideModal(0);
          }} />
        ]
      }, {
        id: 1,
        title: 'Do you want to delete this file?',
        text: 'Once you delete this file, it won’t be possible to undo this action. \n Are you sure you want to delete it?',
        isActive: false,
        hasCloseButton: true,
        hideFn: (id) => this.hideModal(id),
      }

    ]
  }

  showModal(id) {
    this.setState(current => {
      const newState = { ...current };
      newState.modals[id].isActive = true;
      return newState;
    });
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

    return (
    <div className={styles.App}>
      <Button onClick={() => this.showModal(0)} text="Open first modal" backgroundColor='red' />
      <Button onClick={() => this.showModal(1)} text="Open second modal" backgroundColor='lime' />
      {modals[0].isActive && <Modal {...modals[0]} />}
      {modals[1].isActive && <Modal {...modals[1]} />}
    </div>)
  }
}

export default App;
