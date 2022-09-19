import ICard from "./ICard";

export default interface IAllItems {
    items: ICard[]
    total: number
    totalPages: number
}