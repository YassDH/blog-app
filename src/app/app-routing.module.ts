import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { MainComponent } from './sections/main/main.component';
import { ErrorPageComponent } from './shared-components/error-page/error-page.component';

const routes: Routes = [
  { path : '', component : MainComponent, children : [
    { path: '', component : HomeComponent },
    { path: 'category/:category/:id', component : SingleCategoryComponent },
    { path: 'post/:categoryId/:id', component : SinglePostComponent },
    { path: 'contact', component : ContactUsComponent}
  ]},
  { path : 'dashboard', loadChildren: ()=> import('./dashboard/dashboard.module').then((m)=> m.DashboardModule)},
  { path : '**', component : ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
