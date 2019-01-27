import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { PostsDetailsComponent } from '../posts-details/posts-details.component';
import { PostsComponent } from './posts.component';
import { ContentsComponent } from '../contents/contents.component';
import { AuthGuard } from '../../auth/auth.guard';

const routes: Routes = [
    { path: 'posts', canActivate:[AuthGuard], component: ContentsComponent },
    { path: 'posts/:id', canActivate:[AuthGuard], component: PostsDetailsComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
