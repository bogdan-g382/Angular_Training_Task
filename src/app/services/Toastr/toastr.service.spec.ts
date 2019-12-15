import { TestBed } from '@angular/core/testing';

import { ToastrService } from './toastr.service';

describe('ToastrOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToastrService = TestBed.get(ToastrService);
    expect(service).toBeTruthy();
  });
});
