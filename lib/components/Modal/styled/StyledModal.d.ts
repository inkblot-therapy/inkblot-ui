import * as React from 'react';
declare class StyledModal extends React.Component<{
    children: React.ReactNode;
    open: boolean;
    onRequestClose?: () => void;
}> {
    render(): JSX.Element;
}
export default StyledModal;
