import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

import { AppCommonModule } from '../app-common/app-common.module';

import {
	MatButtonModule, MatInput, MatFormField, MatToolbarModule, MatCardModule,
	MatInputModule, MatIconModule
} from '@angular/material';

import {
	BrowserAnimationsModule, NoopAnimationsModule
} from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		MatButtonModule,
		MatToolbarModule,
		MatCardModule,
		MatInputModule,
		MatIconModule,
		BrowserAnimationsModule,
		NoopAnimationsModule,
		ReactiveFormsModule,
		AppCommonModule
	],
	declarations: [LoginComponent]
})
export class LoginModule { }
