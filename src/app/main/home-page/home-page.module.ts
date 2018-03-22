import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';

import { PostCardModule } from '../../post-card/post-card.module';

import {
	AppCommonModule
} from '../../app-common/app-common.module';

@NgModule({
	imports: [
		CommonModule,
		AppCommonModule,
		PostCardModule
	],
	declarations: [HomePageComponent]
})
export class HomePageModule { }
