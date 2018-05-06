import { TestBed, inject } from '@angular/core/testing';

import { LegsService } from './legs.service';

describe('LegsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LegsService]
    });
  });

  it('should be created', inject([LegsService], (service: LegsService) => {
    expect(service).toBeTruthy();
  }));
});
