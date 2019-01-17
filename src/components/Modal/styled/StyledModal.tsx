import * as React from 'react';
import styled, { keyframes } from '../../../utils/styled-components';
import { ModalProps } from '../Modal';

class StyledModal extends React.Component<ModalProps> {
  public render(): JSX.Element {
    const { open, close, children } = this.props;

    return (
      <Container open={open}>
        <Overlay open={open} onClick={close} />
        <ModalBody open={open}>
          <ModalContent>{children}</ModalContent>
        </ModalBody>
      </Container>
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

const Container = styled<{ open: boolean }, 'div'>('div')`
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Overlay = styled<{ open: boolean }, 'div'>('div')`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  animation: ${fadeIn} 250ms ease-in;
`;

const ModalBody = styled<{ open: boolean }, 'div'>('div')`
  display: ${({ open }) => (open ? 'flex' : 'none')}
  position: relative;
  z-index: 2;
  opacity: 1;
  margin: 0 auto;
  max-width: 768px;
  width: 75%;
  min-height: 50px;
  max-height: 60vh;
  overflow-y: auto;
  border-radius: 3px;
  box-shadow: 0 0 10px 0 rgba(99, 150, 177, 0.2);
  animation: ${slideIn} 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
`;

const ModalContent = styled.div`
  padding: 4em 2em;
  background-color: #ffffff;
  width: 100%;
`;

export default StyledModal;
