import { TestBed } from '@angular/core/testing';

import { CurrentUserServiceService } from './current-user-service.service';

describe('CurrentUserServiceService', () => {
  let service: CurrentUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
