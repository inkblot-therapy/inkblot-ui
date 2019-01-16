import * as React from 'react';
import StyledModal from './styled/StyledModal';

export interface Props {
  children: React.ReactNode;
  /** Controls whether the modal is open or not */
  open: boolean;
}

interface State {
  open: boolean;
}

class Modal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      open: props.open,
    };
  }

  public componentDidUpdate(prevProps: Props): void {
    if (this.props.open !== prevProps.open) {
      this.setState({
        open: this.props.open,
      });
    }
  }

  public render(): JSX.Element {
    return (
      <StyledModal open={this.state.open}>{this.props.children}</StyledModal>
    );
  }
}

export default Modal;
