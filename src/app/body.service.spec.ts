import { TestBed, inject } from '@angular/core/testing';

import { BodyService } from './body.service';

describe('BodyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BodyService]
    });
  });

  it('should be created', inject([BodyService], (service: BodyService) => {
    expect(service).toBeTruthy();
  }));
});
