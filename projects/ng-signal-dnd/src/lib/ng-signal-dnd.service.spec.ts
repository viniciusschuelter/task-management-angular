import { TestBed } from '@angular/core/testing';

import { NgSignalDndService } from './ng-signal-dnd.service';

describe('NgSignalDndService', () => {
  let service: NgSignalDndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSignalDndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
