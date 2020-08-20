import { TestBed } from '@angular/core/testing';

import { AddMenuGuard } from './add-menu.guard';

describe('AddMenuGuard', () => {
  let guard: AddMenuGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AddMenuGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
