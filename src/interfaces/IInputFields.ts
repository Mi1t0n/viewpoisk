import IUserChoose from "./IUserChoose";

export default interface IInputFields {
    blockName: string,
    urlTag: keyof IUserChoose
}