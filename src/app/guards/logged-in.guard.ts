import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const loggedInGuard: CanActivateFn = (route, state) => {
  let authService : AuthService = inject(AuthService)
  let router : Router = inject(Router)
  return authService.loadUser().pipe(
    map(user=>{
      if(user){
        router.navigate(['/dashboard/home'])
        return false;  
      }else
        return true;
    })
  );
};
