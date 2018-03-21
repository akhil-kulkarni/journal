import { TestBed, inject } from '@angular/core/testing';

import { AppCommonService } from './app-common.service';

describe('AppCommonService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [AppCommonService]
		});
	});

	it('should be created', inject([AppCommonService],
		(service: AppCommonService) => {
			expect(service).toBeTruthy();
		})
	);
});
