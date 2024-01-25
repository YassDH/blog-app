import { Component, inject } from '@angular/core';
import { User } from 'firebase/auth';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private authService : AuthService = inject(AuthService)
  loggedInUser$ : Observable<User | null> = this.authService.loadUser()


  onLogout(){
    this.authService.logOut()
  }
}
