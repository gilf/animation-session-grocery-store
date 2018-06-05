import { TestBed, inject } from '@angular/core/testing';

import { TimelineManagerService } from './timeline-manager.service';

describe('TimelineManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimelineManagerService]
    });
  });

  it('should ...', inject([TimelineManagerService], (service: TimelineManagerService) => {
    expect(service).toBeTruthy();
  }));
});
