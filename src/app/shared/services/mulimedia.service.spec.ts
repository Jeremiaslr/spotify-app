import { TestBed } from '@angular/core/testing';

import { MulimediaService } from './mulimedia.service';

describe('MulimediaService', () => {
  let service: MulimediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MulimediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
