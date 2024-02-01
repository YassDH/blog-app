import { ResolveFn } from '@angular/router';

export const categoryNameResolver: ResolveFn<string> = (route, state) => {
  return route.params['category'];
};
