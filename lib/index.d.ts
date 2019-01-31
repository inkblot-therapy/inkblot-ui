interface StringValidator {
    isAcceptable(s: string): boolean;
}
declare class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string): boolean;
}
export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };
