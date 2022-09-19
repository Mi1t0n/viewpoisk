import IUserChoose from "./IUserChoose";

export default interface ISelectValues {
    blockName: string,
    content: { id: string, [key: string]: string }[],
    urlTag: keyof IUserChoose
}