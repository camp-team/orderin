import { TestBed } from '@angular/core/testing';

import { DeveloperGetService } from './developer-get.service';

describe('DeveloperGetService', () => {
  let service: DeveloperGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeveloperGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
