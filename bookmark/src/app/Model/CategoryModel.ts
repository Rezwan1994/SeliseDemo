import { IBookMark } from "./bookmark";

export interface ICategory {
    bookMark:IBookMark[]
    category: string;
    
}
export class Category implements ICategory {
    bookMark:IBookMark[]
    category: string;
}