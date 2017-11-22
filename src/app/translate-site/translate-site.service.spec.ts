import { TestBed, inject } from '@angular/core/testing';

import { TranslateSiteService } from './translate-site.service';

describe('TranslateSiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslateSiteService]
    });
  });

  it('should be created', inject([TranslateSiteService], (service: TranslateSiteService) => {
    expect(service).toBeTruthy();
  }));
});
