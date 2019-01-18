import * as React from 'react';
import StyledModal from './styled/StyledModal';

interface ModalProps {
  children: React.ReactNode;
  /** Controls whether the modal is open or not */
  open: boolean;
  /** Function to call upon requesting to close */
  onRequestClose?: () => void;
}

interface ModalState {
  open: boolean;
}

class Modal extends React.Component<ModalProps, ModalState> {
  constructor(props: ModalProps) {
    super(props);
    this.state = {
      open: props.open,
    };
  }

  public componentDidUpdate(prevProps: ModalProps): void {
    if (this.props.open !== prevProps.open) {
      this.setState({
        open: this.props.open,
      });
    }
  }

  public render(): JSX.Element {
    return (
      <StyledModal
        open={this.state.open}
        onRequestClose={this.props.onRequestClose}
      >
        {this.props.children}
      </StyledModal>
    );
  }
}

export default Modal;
