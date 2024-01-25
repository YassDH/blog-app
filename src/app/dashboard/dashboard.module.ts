import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../sections/dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardCategoriesComponent } from './dashboard-categories/dashboard-categories.component';
import { PostTitlePipe } from '../pipes/post-title.pipe';
import { AllPostsComponent } from './dashboard-posts/all-posts/all-posts.component';
import { NewPostComponent } from './dashboard-posts/new-post/new-post.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardSubscribersComponent } from './dashboard-subscribers/dashboard-subscribers.component';
import { DashboardCommentsComponent } from './dashboard-comments/dashboard-comments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    DashboardCategoriesComponent,
    PostTitlePipe,
    AllPostsComponent,
    NewPostComponent,
    LoginComponent,
    DashboardSubscribersComponent,
    DashboardCommentsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    AngularEditorModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedComponentsModule,
  ]
})
export class DashboardModule { }
