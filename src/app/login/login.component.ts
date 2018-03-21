import { Component, OnInit } from '@angular/core';

import { AppCommonService } from '../app-common/app-common.service';

import { ROUTE_HOMEPAGE } from '../app-common/app-common.constants';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	homePageLink: string;
	loginForm: FormGroup;
	JSON: any;
	constructor(private appCommonService: AppCommonService,
		private fb: FormBuilder) {
		this.JSON = JSON;
		this.createForm();
	}

	ngOnInit() {
		this.homePageLink = '/main';
	}

	login() {
		console.log('logging in');
		this.appCommonService.changeRoute(
			{
				route: [this.homePageLink], headerLeftIcon: 'menu',
				headerRightIcon: 'plus', headerText: 'Home'
			},
			'left');
	}

	createForm() {
		this.loginForm = this.fb.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

}
