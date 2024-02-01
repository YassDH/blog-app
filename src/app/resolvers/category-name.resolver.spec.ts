import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { categoryNameResolver } from './category-name.resolver';

describe('categoryNameResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => categoryNameResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
