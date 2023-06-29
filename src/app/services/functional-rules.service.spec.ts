import { TestBed } from '@angular/core/testing';

import { FunctionalRulesService } from './functional-rules.service';

describe('FunctionalRulesService', () => {
  let service: FunctionalRulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionalRulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
