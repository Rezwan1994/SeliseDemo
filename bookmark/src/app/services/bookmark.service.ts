import { Injectable } from '@angular/core';
import { BookMark } from '../Model/bookmark';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  bookmark = new BookMark();
  constructor() { }

  getBookMark(id:number)
  {
      
  }
}
