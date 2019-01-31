import * as React from 'react';
interface DynamicModalState {
    open: boolean;
}
declare class DynamicModal extends React.Component<{}, DynamicModalState> {
    constructor(props: {});
    toggleOpen(): void;
    render(): JSX.Element;
}
export default DynamicModal;
