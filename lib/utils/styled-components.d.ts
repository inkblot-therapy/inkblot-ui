/// <reference types="react" />
import * as styledComponents from 'styled-components';
import { ThemeInterface } from '../theme';
declare const styled: styledComponents.ThemedBaseStyledInterface<ThemeInterface>, css: styledComponents.BaseThemedCssFunction<ThemeInterface>, createGlobalStyle: <P = {}>(strings: TemplateStringsArray, ...interpolations: styledComponents.Interpolation<styledComponents.ThemedStyledProps<P, ThemeInterface>>[]) => styledComponents.GlobalStyleClass<P, ThemeInterface>, keyframes: (strings: TemplateStringsArray, ...interpolations: styledComponents.SimpleInterpolation[]) => styledComponents.Keyframes, ThemeProvider: import("react").ComponentClass<styledComponents.ThemeProviderProps<ThemeInterface>, any>;
export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
