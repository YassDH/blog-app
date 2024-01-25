import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { FirestoreModule, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { CategoryNavbarComponent } from './layouts/category-navbar/category-navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SubscriptionFormComponent } from './pages/subscription-form/subscription-form.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';
import { MainComponent } from './sections/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { CommentListComponent } from './pages/comments/comment-list/comment-list.component';
import { CommentFormComponent } from './pages/comments/comment-form/comment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryNavbarComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    ContactUsComponent,
    SubscriptionFormComponent,
    CommentFormComponent,
    CommentListComponent,
    PostCardComponent,
    MainComponent,
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
    SharedComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
