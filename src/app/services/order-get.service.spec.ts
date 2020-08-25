import { TestBed } from '@angular/core/testing';

import { OrderGetService } from './order-get.service';

describe('OrderGetService', () => {
  let service: OrderGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
