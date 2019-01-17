import * as React from 'react';
import StyledModal from './styled/StyledModal';

interface ModalProps {
  children: React.ReactNode;
  /** Controls whether the modal is open or not */
  open: boolean;
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

    this.close = this.close.bind(this);
  }

  public componentDidUpdate(prevProps: ModalProps): void {
    if (this.props.open !== prevProps.open) {
      this.setState({
        open: this.props.open,
      });
    }
  }

  public close(): void {
    this.setState({
      open: false,
    });
  }

  public render(): JSX.Element {
    return (
      <StyledModal open={this.state.open} close={this.close}>
        {this.props.children}
      </StyledModal>
    );
  }
}

export default Modal;
