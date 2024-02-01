import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { categoryResolver } from './category.resolver';

describe('categoryResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => categoryResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
