import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkDetailsComponent } from './components/bookmark-details/bookmark-details.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';


const routes: Routes = [
  { path: '', component: BookmarkComponent },
  { path: 'bookmark/details/:id', component: BookmarkDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
