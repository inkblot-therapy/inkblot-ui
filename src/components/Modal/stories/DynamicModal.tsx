import * as React from 'react';
import Modal from '../Modal';

interface DynamicModalState {
  open: boolean;
}

class DynamicModal extends React.Component<{}, DynamicModalState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      open: false,
    };

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  public toggleOpen(): void {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  }

  public render() {
    return (
      <div>
        <Modal open={this.state.open} onRequestClose={this.toggleOpen}>
          <p>Hello</p>
        </Modal>
        <button onClick={this.toggleOpen}>Open modal</button>
      </div>
    );
  }
}

export default DynamicModal;
