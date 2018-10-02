import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { ContentsComponent } from '../components/contents/contents.component';

const routes: Routes = [
{ path: '', component: ContentsComponent},
{ path: 'users/login', component: LoginComponent},
{ path: 'users/register', component : RegisterComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
