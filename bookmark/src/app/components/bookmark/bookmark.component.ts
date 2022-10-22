import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BookMark, IBookMark } from 'src/app/Model/bookmark';
import { Category, ICategory } from 'src/app/Model/CategoryModel';
import { BookmarkService } from 'src/app/services/bookmark.service';
@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {

  constructor( private modalService: BsModalService,public bookMarkService:BookmarkService) { }
  @ViewChild('bookMarkModal', { static: false }) bookMarkModal: TemplateRef<any>;
  bookmarkModalRef: BsModalRef;
  config = {
    keyboard: false,
    class: 'modal-lg',
    ignoreBackdropClick: true
  };
  isButtonVisible:boolean = true;
  categoryList:string[] = [];
  bookMarkList:IBookMark[] = [];

  CategoryModel:Category = new Category();
  categoryModelList:ICategory[] =[];

  id:number =0;
  getCategoryList()
  {
   this.categoryList.push("Category A")
   this.categoryList.push("Category B")
  }
  openInvestmentInitSearchModal(template: TemplateRef<any>) {
    this.bookmarkModalRef = this.modalService.show(template, this.config);
  }
  ngOnInit(): void {
    this. getCategoryList();
  }

  AddBookmark()
  {
    this.openInvestmentInitSearchModal(this.bookMarkModal)
  }
  CategoryAdd()
  {

  }
  SaveBookMark()
  {
    this.id += 1;
    this.bookMarkService.bookmark.id = this.id;
    debugger;
    var flag = 0;
    for(var i =0;i<this.categoryList.length;i++)
    {
       if(this.categoryList[i] == this.bookMarkService.bookmark.category)
       {
        if(this.categoryModelList.length >0)
        {
          for(var j=0;j<this.categoryModelList.length;j++)
          {
             if(this.categoryModelList[j].category ==this.bookMarkService.bookmark.category)
             {
              if(this.categoryModelList[j].category == this.bookMarkService.bookmark.category)
              {
                flag = 1;
                this.categoryModelList[j].bookMark.push(this.bookMarkService.bookmark)
              }
             }
          }
         
        }
        else{
         flag = 1;
         this.CategoryModel = new Category();
         this.bookMarkList = [];
          this.CategoryModel.category = this.bookMarkService.bookmark.category;
          this.CategoryModel.bookMark = this.bookMarkList;
          this.CategoryModel.bookMark.push(this.bookMarkService.bookmark)
          this.categoryModelList.push(this.CategoryModel); 
       
        }
        
       }

    }
    if(flag == 0)
    {
      this.CategoryModel = new Category();
      this.bookMarkList = [];
      this.CategoryModel.category = this.bookMarkService.bookmark.category;
      this.CategoryModel.bookMark = this.bookMarkList;
      this.CategoryModel.bookMark.push(this.bookMarkService.bookmark)
      this.categoryModelList.push(this.CategoryModel); 
      this.CategoryModel = new Category();
    }

   console.log(this.categoryModelList);
    alert("save successfully");
    this.bookMarkService.bookmark = new BookMark();
    this.bookmarkModalRef.hide()
  }
}
