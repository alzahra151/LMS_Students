import { TestBed } from '@angular/core/testing';

import { ClassesServicesService } from './classes-services.service';

describe('ClassesServicesService', () => {
  let service: ClassesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
