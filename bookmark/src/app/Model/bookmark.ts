export interface IBookMark {
      id:number
      title: string;
      url: any;
      category:any
}
export class BookMark implements IBookMark {
    id:number
    title: string;
    url: any;
    category:any
}