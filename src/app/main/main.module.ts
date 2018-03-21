import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomePageModule } from './home-page/home-page.module';


	// import {
	// 	BrowserAnimationsModule,
	// 	NoopAnimationsModule
	// } from '@angular/platform-browser/animations';
@NgModule({
	imports: [
		CommonModule,
		HomePageModule,
		MainRoutingModule,
	],
	declarations: []
})
export class MainModule { }
