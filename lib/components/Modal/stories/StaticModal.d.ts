import * as React from 'react';
interface StaticModalState {
    open: boolean;
}
declare class StaticModal extends React.Component<{}, StaticModalState> {
    constructor(props: {});
    toggleOpen(): void;
    render(): JSX.Element;
}
export default StaticModal;
