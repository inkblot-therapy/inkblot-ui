import * as React from 'react';
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
declare class Modal extends React.Component<ModalProps, ModalState> {
    constructor(props: ModalProps);
    componentDidUpdate(prevProps: ModalProps): void;
    render(): JSX.Element;
}
export default Modal;
