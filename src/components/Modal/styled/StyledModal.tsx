import * as React from 'react';
import styled, { keyframes } from '../../../utils/styled-components';
import { Props } from '../Modal';

class StyledModal extends React.Component<Props> {
  public render(): JSX.Element {
    return (
      <Backdrop open={this.props.open}>
        <Modal>{this.props.children}</Modal>
      </Backdrop>
    );
  }
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    top: -100px;
  }
  to {
    top: 0px;
  }
`;

const Backdrop = styled<{ open: boolean }, 'div'>('div')`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  animation: ${fadeIn} 250ms ease-in;
`;

const Modal = styled.div`
  position: relative;
  padding: 4em 2em;
  margin: auto;
  max-width: 768px;
  width: 75%;
  min-height: 50px;
  max-height: 60vh;
  overflow-y: auto;
  border-radius: 3px;
  box-shadow: 0 0 10px 0 rgba(99, 150, 177, 0.2);
  background-color: #ffffff;
  animation: ${slideIn} 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
`;

export default StyledModal;
