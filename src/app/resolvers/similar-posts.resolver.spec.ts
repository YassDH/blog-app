import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { similarPostsResolver } from './similar-posts.resolver';

describe('similarPostsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => similarPostsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
