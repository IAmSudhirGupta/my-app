import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  // { path: 'posts', component: ContentsComponent},
  { path: 'users/login', component: LoginComponent},
  { path: 'users/register', component : RegisterComponent},
  { path: 'posts', loadChildren:'./../components/posts/posts.module#PostsModule' },
  { path: 'posts/:id', loadChildren:'./../components/posts/posts.module#PostsModule' },
  { path: 'profile', loadChildren:'./../components/profile/profile.module#ProfileModule' },
  { path: 'settings', loadChildren:'./../components/settings/settings.module#SettingsModule'},
  { path: '',  canActivate:[AuthGuard], redirectTo: '/posts', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
