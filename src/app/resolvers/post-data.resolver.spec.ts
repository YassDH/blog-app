import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { postDataResolver } from './post-data.resolver';

describe('postDataResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => postDataResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
