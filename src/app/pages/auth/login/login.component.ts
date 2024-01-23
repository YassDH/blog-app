import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  authService : AuthService = inject(AuthService)

  onSubmit(loginForm : NgForm){
    this.authService.login(loginForm.value.email, loginForm.value.password)
  }

}
