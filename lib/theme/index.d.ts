interface Colors {
    disabled: string;
    primary: string;
    secondary: string;
    tertiary: string;
    people: string;
}
interface StringMap {
    [s: string]: string;
}
interface Text {
    inline: StringMap;
    label: StringMap;
    standard: StringMap;
    selectedOption: StringMap;
}
export interface ThemeInterface {
    button: {
        backgroundColor: Colors;
        textColor: Colors;
    };
    input: {
        text: Text;
    };
}
declare const theme: ThemeInterface;
export default theme;
