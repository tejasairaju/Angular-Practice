import { NavbarComponent } from './navbar/navbar.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { GithubService } from './services/github.service';
import { AppErrorHandler } from './common/app-error-handler';
import { ErrorHandler } from '@angular/core';
import { PostService } from './services/post.service';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { CourseService } from './course.service';
import { CourseComponent } from './course.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { ZippyComponent } from './zippy/zippy.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { HttpModule } from "@angular/http";
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { RouterModule } from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import { ArchiveComponent } from './archive/archive.component';



@NgModule({
  declarations: [
    AppComponent,CourseComponent, FavoriteComponent, TitleCasePipe, ZippyComponent,
     NewCourseFormComponent,SignupFormComponent, ChangePasswordComponent, PostsComponent, 
     GithubFollowersComponent,HomeComponent,NotFoundComponent,GithubProfileComponent,NavbarComponent, 
     HomePageComponent, ArchiveComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpModule,
    /*RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'followers/:id/:username',
        component:GithubProfileComponent
      },
      {
        path:'followers',
        component:GithubFollowersComponent
      },
      {
        path:'posts',
        component:PostsComponent
      },
      {
        path:'**',
        component:NotFoundComponent
      }
    ])*/
    RouterModule.forRoot([
      {
        path:'',
        component:HomePageComponent
      },
      {
        path:'archive/:year/:month',
        component:ArchiveComponent
      },
      {
        path:'**',
        component:NotFoundComponent
      }
    ])
    

  ],
  providers: [CourseService,PostService,{provide:ErrorHandler,useClass:AppErrorHandler},GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
