import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { exitNewPostGuard } from './exit-new-post.guard';

describe('exitNewPostGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => exitNewPostGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
