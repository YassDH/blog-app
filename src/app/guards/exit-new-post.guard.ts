import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';



export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | boolean;
}
export const exitNewPostGuard: CanDeactivateFn<CanComponentDeactivate> = (
  component: CanComponentDeactivate,
) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};
