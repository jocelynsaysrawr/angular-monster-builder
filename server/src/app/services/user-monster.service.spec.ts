import { TestBed, inject } from '@angular/core/testing';

import { UserMonsterService } from './user-monster.service';

describe('UserMonsterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserMonsterService]
    });
  });

  it('should be created', inject([UserMonsterService], (service: UserMonsterService) => {
    expect(service).toBeTruthy();
  }));
});
