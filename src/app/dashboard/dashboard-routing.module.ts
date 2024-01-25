import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../sections/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { authGuardGuard } from '../guards/auth-guard.guard';
import { DashboardCategoriesComponent } from './dashboard-categories/dashboard-categories.component';
import { DashboardSubscribersComponent } from './dashboard-subscribers/dashboard-subscribers.component';
import { AllPostsComponent } from './dashboard-posts/all-posts/all-posts.component';
import { DashboardCommentsComponent } from './dashboard-comments/dashboard-comments.component';
import { NewPostComponent } from './dashboard-posts/new-post/new-post.component';
import { ErrorPageComponent } from '../shared-components/error-page/error-page.component';
import { loggedInGuard } from '../guards/logged-in.guard';


const routes: Routes = [
  { path : '', component: DashboardComponent , children :[
    { path : '', component : LoginComponent, canActivate : [loggedInGuard]},
    { path : 'home', component : DashboardHomeComponent, canActivate : [authGuardGuard]},
    { path : 'categories', component : DashboardCategoriesComponent, canActivate : [authGuardGuard]},
    { path : 'subscribers', component : DashboardSubscribersComponent, canActivate : [authGuardGuard]},
    { path : 'posts', component : AllPostsComponent, canActivate : [authGuardGuard]},
    { path : 'comments', component : DashboardCommentsComponent, canActivate : [authGuardGuard]},
    { path : 'posts/new', component : NewPostComponent, canActivate : [authGuardGuard]},
    { path : '**', component : ErrorPageComponent, canActivate : [authGuardGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }