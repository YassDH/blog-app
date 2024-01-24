import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { MainComponent } from './sections/main/main.component';
import { DashboardComponent } from './sections/dashboard/dashboard.component';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import { DashboardCategoriesComponent } from './pages/dashboard-categories/dashboard-categories.component';
import { AllPostsComponent } from './pages/dashboard-posts/all-posts/all-posts.component';
import { NewPostComponent } from './pages/dashboard-posts/new-post/new-post.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { authGuardGuard } from './guards/auth-guard.guard';
import { DashboardSubscribersComponent } from './pages/dashboard-subscribers/dashboard-subscribers.component';
import { DashboardCommentsComponent } from './pages/dashboard-comments/dashboard-comments.component';
import { loggedInGuard } from './guards/logged-in.guard';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [
  { path : '', component : MainComponent, children : [
    { path: '', component : HomeComponent },
    { path: 'category/:category/:id', component : SingleCategoryComponent },
    { path: 'post/:categoryId/:id', component : SinglePostComponent },
    { path: 'contact', component : ContactUsComponent}
  ]},
  { path : 'dashboard', component: DashboardComponent , children :[
    { path : '', component : LoginComponent, canActivate : [loggedInGuard]},
    { path : 'home', component : DashboardHomeComponent, canActivate : [authGuardGuard]},
    { path : 'categories', component : DashboardCategoriesComponent, canActivate : [authGuardGuard]},
    { path : 'subscribers', component : DashboardSubscribersComponent, canActivate : [authGuardGuard]},
    { path : 'posts', component : AllPostsComponent, canActivate : [authGuardGuard]},
    { path : 'comments', component : DashboardCommentsComponent, canActivate : [authGuardGuard]},
    { path : 'posts/new', component : NewPostComponent, canActivate : [authGuardGuard]},
    { path : '**', component : ErrorPageComponent, canActivate : [authGuardGuard]}
  ]},
  { path : '**', component : ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
