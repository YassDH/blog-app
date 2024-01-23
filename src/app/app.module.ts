import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { FirestoreModule, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HeaderComponent } from './layouts/header/header.component';
import { CategoryNavbarComponent } from './layouts/category-navbar/category-navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';
import { MainComponent } from './sections/main/main.component';
import { DashboardComponent } from './sections/dashboard/dashboard.component';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import { DashboardCategoriesComponent } from './pages/dashboard-categories/dashboard-categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AllPostsComponent } from './pages/dashboard-posts/all-posts/all-posts.component';
import { NewPostComponent } from './pages/dashboard-posts/new-post/new-post.component';
import { PostTitlePipe } from './pipes/post-title.pipe';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { TimestampToDatePipe } from './pipes/timestamp-to-date.pipe';
import { LoginComponent } from './pages/auth/login/login.component';
import { DashboardSubscribersComponent } from './pages/dashboard-subscribers/dashboard-subscribers.component';
import { DashboardCommentsComponent } from './pages/dashboard-comments/dashboard-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryNavbarComponent,
    FooterComponent,
    HomeComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    ContactUsComponent,
    SubscriptionFormComponent,
    CommentFormComponent,
    CommentListComponent,
    PostCardComponent,
    MainComponent,
    DashboardComponent,
    DashboardHomeComponent,
    DashboardCategoriesComponent,
    AllPostsComponent,
    NewPostComponent,
    PostTitlePipe,
    TimestampToDatePipe,
    LoginComponent,
    DashboardSubscribersComponent,
    DashboardCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyCvI7L1C8UR8qgu9THArFj23OlflcTAKqM",
      authDomain: "blog-app-a3a4f.firebaseapp.com",
      projectId: "blog-app-a3a4f",
      storageBucket: "blog-app-a3a4f.appspot.com",
      messagingSenderId: "613877446325",
      appId: "1:613877446325:web:215334c7308c637d31f0fc"
    })),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),
    FirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularEditorModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
