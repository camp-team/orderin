import { TestBed } from '@angular/core/testing';

import { AddRestaurantGuard } from './add-restaurant.guard';

describe('AddRestaurantGuard', () => {
  let guard: AddRestaurantGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AddRestaurantGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
