import { TestBed } from '@angular/core/testing';

import { NumistaService } from './numista.service';

describe('NumistaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumistaService = TestBed.get(NumistaService);
    expect(service).toBeTruthy();
  });
});
