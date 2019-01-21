import * as React from 'react';
import Modal from '../Modal';

interface StaticModalState {
  open: boolean;
}

class StaticModal extends React.Component<{}, StaticModalState> {
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
        <Modal open={this.state.open}>
          <p>Hello</p>
        </Modal>
        <button onClick={this.toggleOpen}>Open modal</button>
      </div>
    );
  }
}

export default StaticModal;
