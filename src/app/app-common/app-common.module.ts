import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JnlHeaderComponent } from './jnl-header/jnl-header.component';
import {
	MatIconModule, MatToolbarModule
} from '@angular/material';
@NgModule({
	imports: [
		CommonModule,
		MatIconModule,
		MatToolbarModule,
	],
	declarations: [JnlHeaderComponent],
	exports: [JnlHeaderComponent]
})
export class AppCommonModule { }
