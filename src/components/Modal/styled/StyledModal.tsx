import * as React from 'react';
import styled, { keyframes } from '../../../utils/styled-components';
import { Props } from '../Modal';

class StyledModal extends React.Component<Props> {
  public render(): JSX.Element {
    return (
      <Backdrop {...this.props}>
        <Modal>{this.props.children}</Modal>
      </Backdrop>
    );
  }
}

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const Backdrop = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  padding-top: 10%;
  animation: ${fadeIn} 0.4s ease-in;
`;

const Modal = styled.div`
  padding: 4em 2em;
  margin: auto;
  min-width: 100px;
  max-width: 60vw;
  min-height: 50px;
  max-height: 60vh;
  overflow-y: auto;
  border-radius: 3px;
  box-shadow: 0 0 10px 0 rgba(99, 150, 177, 0.2);
  background-color: #ffffff;
  animation: ${fadeIn} 0.4s ease-in;
`;

export default StyledModal;
