import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsDetailsComponent } from '../posts-details/posts-details.component';
import { PostsComponent } from './posts.component';

const routes: Routes = [
  { path: '', component: PostsComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
