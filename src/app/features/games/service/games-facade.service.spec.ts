import { TestBed } from '@angular/core/testing';

import { GamesFacadeService } from './games-facade.service';

describe('GamesFacadeService', () => {
  let service: GamesFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
