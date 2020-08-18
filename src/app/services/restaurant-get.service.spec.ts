import { TestBed } from '@angular/core/testing';

import { RestaurantGetService } from './restaurant-get.service';

describe('RestaurantGetService', () => {
  let service: RestaurantGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
