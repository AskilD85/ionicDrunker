import { TestBed } from '@angular/core/testing';

import { LaravelapiService } from './laravelapi.service';

describe('LaravelapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaravelapiService = TestBed.get(LaravelapiService);
    expect(service).toBeTruthy();
  });
});
