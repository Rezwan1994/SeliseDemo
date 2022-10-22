import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookMark } from 'src/app/Model/bookmark';
import { BookmarkService } from 'src/app/services/bookmark.service';

@Component({
  selector: 'app-bookmark-details',
  templateUrl: './bookmark-details.component.html',
  styleUrls: ['./bookmark-details.component.scss']
})
export class BookmarkDetailsComponent implements OnInit {

  constructor(public bookMarkService:BookmarkService) { }
  @Input()
  bookmark:BookMark = new BookMark();
  ngOnInit(): void {
    
  }

}
