import { TestBed } from '@angular/core/testing';

import { MenuGetService } from './menu-get.service';

describe('MenuGetService', () => {
  let service: MenuGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
