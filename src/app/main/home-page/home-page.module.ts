import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { MatCardModule } from '@angular/material';

import {
	AppCommonModule
} from '../../app-common/app-common.module';

@NgModule({
	imports: [
		CommonModule,
		MatCardModule,
		AppCommonModule
	],
	declarations: [HomePageComponent]
})
export class HomePageModule { }
