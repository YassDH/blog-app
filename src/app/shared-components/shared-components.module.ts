import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TimestampToDatePipe } from '../pipes/timestamp-to-date.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent,
    TimestampToDatePipe,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent,
    TimestampToDatePipe,
  ]
})
export class SharedComponentsModule { }
