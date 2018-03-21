import { Component } from '@angular/core';

import { AppCommonService } from './app-common/app-common.service';
import { ApiService } from './app-common/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
	providers: [AppCommonService, ApiService]
})
export class AppComponent {
  title = 'app';
}
