import { Injectable } from '@angular/core';

import {
	query, group, animate, style, trigger, transition, animateChild
} from '@angular/animations';

import {
	Router, ActivatedRoute, NavigationStart, NavigationEnd
} from '@angular/router';

import { Http } from '@angular/http';
import { ASSETS_I18N_PATH } from '../app-common/app-common.constants';
import { TranslateStaticLoader } from 'ng2-translate/src/translate.service';

import { Subject } from 'rxjs/Subject';

export const slideLeft = [
	query(':leave', style({
		position: 'fixed', height: '100%', transform: 'translate3d(0%,0,0)'
	})),
	query(':enter', style({
		position: 'fixed', height: '100%', transform: 'translate3d(-100%,0,0)'
	})),
	group([
		query(':leave',
			animate('0.3s', style({ transform: 'translate3d(100%,0,0)' }))
		),
		query(':enter',
			animate('0.3s', style({ transform: 'translate3d(0%,0,0)' }))
		)
	])
];

export const slideRight = [
	query(':leave', style({ position: 'fixed', height: '100%',
													transform: 'translate3d(0%,0,0)' })),
	query(':enter', style({ position: 'fixed', height: '100%',
													transform: 'translate3d(100%,0,0)' })),
	group([
		query(':leave',
			animate('0.3s', style({ transform: 'translate3d(-100%,0,0)' }))),
		query(':enter',
			animate('0.3s', style({ transform: 'translate3d(0%,0,0)' })))
	])
];

export function createTranslateLoader(http: Http) {
	return new TranslateStaticLoader(http, ASSETS_I18N_PATH, '.json');
}

@Injectable()
export class AppCommonService {

	private headerLeftIcon: string;
	private headerRightIcon: string;
	private headerText: string;
	private routes: {
		route: any[], headerLeftIcon: string, headerRightIcon: string,
		headerText: string
	}[] = [];
	private headerDataObject = new Subject<{
		'headerLeftIcon': string, 'headerRightIcon': string, 'headerText': string
	}>();
	headerData$ = this.headerDataObject.asObservable();

	constructor(private router: Router, private route: ActivatedRoute) {
		router.events.subscribe(event => {
			if (event instanceof NavigationStart) {
				console.log('navStart');
			}
			if (event instanceof NavigationEnd) {
				console.log('navEnd');
				this.headerDataObject.next({
					'headerLeftIcon': this.getHeaderLeftIcon(),
					'headerRightIcon': this.getHeaderRightIcon(),
					'headerText': this.getHeaderText()
				});
			}
			// NavigationEnd
			// NavigationCancel
			// NavigationError
			// RoutesRecognized
		});
	}

	public changeRoute(routeDetails, slideTo) {
		sessionStorage.slideTo = slideTo || 'left';
		if (!!routeDetails.headerLeftIcon) {
			this.setHeaderLeftIcon(routeDetails.headerLeftIcon);
		}
		if (!!routeDetails.headerRightIcon) {
			this.setHeaderRightIcon(routeDetails.headerRightIcon);
		}
		if (!!routeDetails.headerText) {
			this.setHeaderText(routeDetails.headerText);
		}
		this.routes.push(routeDetails);
		this.router.navigate(routeDetails.route, { relativeTo: this.route });
	}

	public goBack() {
		this.routes.pop();
		const lastRoute = this.routes[this.routes.length - 1];
		if (!!lastRoute && !!lastRoute.headerLeftIcon) {
			this.setHeaderLeftIcon(lastRoute.headerLeftIcon);
		}
		if (!!lastRoute && !!lastRoute.headerRightIcon) {
			this.setHeaderRightIcon(lastRoute.headerRightIcon);
		}
		if (!!lastRoute && !!lastRoute.headerText) {
			this.setHeaderText(lastRoute.headerText);
		}
		if (!!this.routes && this.routes.length > 0) {
			this.router.navigate(lastRoute.route, { relativeTo: this.route });
		}
	}

	public getHeaderLeftIcon() {
		return this.headerLeftIcon;
	}
	public setHeaderLeftIcon(leftIcon: string) {
		this.headerLeftIcon = leftIcon;
		console.log('set: ' + this.headerLeftIcon);
	}

	public getHeaderRightIcon() {
		return this.headerRightIcon;
	}
	public setHeaderRightIcon(rightIcon: string) {
		this.headerRightIcon = rightIcon;
	}

	public getHeaderText() {
		return this.headerText;
	}

	public setHeaderText(headerText: string) {
		this.headerText = headerText;
	}

}
