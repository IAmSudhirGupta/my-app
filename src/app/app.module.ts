
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentLeftComponent } from './components/content-left/content-left.component';
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
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentLeftComponent,
    ContentRightComponent,
    LoginComponent,
    RegisterComponent,
    ContentsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService, AuthService,{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
