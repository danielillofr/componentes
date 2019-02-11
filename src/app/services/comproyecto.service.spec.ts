import { TestBed } from '@angular/core/testing';

import { ComproyectoService } from './comproyecto.service';

describe('ComproyectoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComproyectoService = TestBed.get(ComproyectoService);
    expect(service).toBeTruthy();
  });
});
