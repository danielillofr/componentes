import { TestBed } from '@angular/core/testing';

import { ApicompService } from './apicomp.service';

describe('ApicompService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApicompService = TestBed.get(ApicompService);
    expect(service).toBeTruthy();
  });
});
