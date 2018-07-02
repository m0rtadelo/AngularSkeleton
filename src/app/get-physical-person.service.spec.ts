import { TestBed, inject } from '@angular/core/testing';

import { GetPhysicalPersonService } from './get-physical-person.service';

describe('GetPhysicalPersonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPhysicalPersonService]
    });
  });

  it('should be created', inject([GetPhysicalPersonService], (service: GetPhysicalPersonService) => {
    expect(service).toBeTruthy();
  }));
});
