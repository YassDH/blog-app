import { Injectable, inject } from '@angular/core';
import { Auth, authState, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private auth: Auth = inject(Auth);
  private toastr : ToastrService = inject(ToastrService)
  private router : Router = inject(Router)


  login(email : string, password: string){
    signInWithEmailAndPassword(this.auth, email, password).then((logRef)=>{
      this.toastr.success("Logged In Successfully !")
      this.router.navigate(['/dashboard/home'])
    }).catch((err)=>{      
      this.toastr.error("Wrong credentials, please try again !")
    })
  }

  loadUser(){
    return authState(this.auth)
  }

  logOut(){
    signOut(this.auth).then(()=>{
      this.toastr.success("Logged Out Successfully !")
      this.router.navigate(['/dashboard'])
    }).catch((err)=>{
      this.toastr.error("An Error has occured, please try again !")
    })
  }
}
