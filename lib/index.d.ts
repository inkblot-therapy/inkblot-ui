interface StringValidator {
    isAcceptable(s: string): boolean;
}
declare class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string): boolean;
}
declare const helloMessage = "Hello!!";
export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };
export { helloMessage as HelloMsg };
