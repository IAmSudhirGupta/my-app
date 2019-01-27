
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentRightComponent } from './components/content-right/content-right.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ContentsComponent } from './components/contents/contents.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserService } from './services/user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../app/services/token.intercepter';
import { AuthService } from './services/auth.service';
import { PostsService } from './services/posts.service';
import { PostsDetailsComponent } from './components/posts-details/posts-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { EventService } from './services/event-service.service';
import { PostsModule } from './components/posts/posts.module';
import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProfileModule } from './components/profile/profile.module';
import { SettingsModule } from './components/settings/settings.module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentRightComponent,
    LoginComponent,
    RegisterComponent,
    ContentsComponent,
    NotFoundComponent,
    PostsDetailsComponent,
    PostsComponent,
    ProfileComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    PostsModule,
    ProfileModule,
    SettingsModule,
    AppRoutingModule
  ],
  providers: [UserService, AuthService, PostsService, EventService, AuthGuard, {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
