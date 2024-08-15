import { TestBed } from '@angular/core/testing';

import { DocViewerService } from './doc-viewer-service.service';

describe('DocViewerServiceService', () => {
  let service: DocViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
