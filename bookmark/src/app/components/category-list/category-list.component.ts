import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BookMark, IBookMark } from 'src/app/Model/bookmark';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  @Input()
  bookmarks:IBookMark[];
  // @Output()
  // onDetailClick: EventEmitter<BookMark> = new EventEmitter<BookMark>()
  bookmark:BookMark = new BookMark();
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.bookmark.title = '';
    this.bookmark.url = '';
    this.bookmark.category = '';
  }
  Details(bookmark: BookMark)
  {
    this.bookmark = bookmark;
 
    debugger;
  }

}
