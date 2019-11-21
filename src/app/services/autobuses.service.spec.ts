import { TestBed } from '@angular/core/testing';

import { AutobusesService } from './autobuses.service';

describe('AutobusesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutobusesService = TestBed.get(AutobusesService);
    expect(service).toBeTruthy();
  });
});
