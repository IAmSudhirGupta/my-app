import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { ContentsComponent } from '../components/contents/contents.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { PostsComponent } from '../components/posts/posts.component';
import { PostsDetailsComponent } from '../components/posts-details/posts-details.component';

const routes: Routes = [
{ path: '', component: ContentsComponent},
{ path: 'users/login', component: LoginComponent},
{ path: 'users/register', component : RegisterComponent},
{ path: 'posts', component: PostsComponent },
{ path: 'posts/:id', component: PostsDetailsComponent },
{ path: '**', component: NotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
