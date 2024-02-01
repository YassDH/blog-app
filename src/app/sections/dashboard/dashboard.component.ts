import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
private route=inject(ActivatedRoute)

  toggleActive: boolean = true;
  currcomponent: string= "dashboard"
  toggleMenu() {
    this.toggleActive = !this.toggleActive;
  }

  
  private authService : AuthService = inject(AuthService)


  onLogout(){
    this.authService.logOut()
  }
}
