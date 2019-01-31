/// <reference types="styled-components" />
import { ButtonProps } from '../Button';
declare const StyledButton: import("styled-components").StyledComponentClass<ButtonProps, import("../../../theme").ThemeInterface, Pick<ButtonProps, "label" | "style" | "children" | "onClick" | "disabled" | "primary" | "secondary" | "tertiary" | "singleClick" | "className"> & {
    theme?: import("../../../theme").ThemeInterface | undefined;
}>;
export default StyledButton;
