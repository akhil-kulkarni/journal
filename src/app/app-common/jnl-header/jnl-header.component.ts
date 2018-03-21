import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-jnl-header',
	templateUrl: './jnl-header.component.html',
	styleUrls: ['./jnl-header.component.scss'],
})
export class JnlHeaderComponent implements OnInit {

	showHdrLogo: boolean;
	showSearchBar: boolean;
	showRightIconGroup: boolean;
	showNotif: boolean;

	constructor() {
	}

	ngOnInit() {
	}

	@Input()
	set showHdrLogoIn(showHdrLogoIn: boolean) {
		console.log('showHdrLogoIn: ' + showHdrLogoIn);
		this.showHdrLogo = showHdrLogoIn;
	}

	@Input()
	set showSearchBarIn(showSearchBarIn: boolean) {
		console.log('showSearchBarIn: ' + showSearchBarIn);
		this.showSearchBar = showSearchBarIn;
	}

	@Input()
	set showRightIconGroupIn(showRightIconGroupIn: boolean) {
		console.log('showRightIconGroupIn: ' + showRightIconGroupIn);
		this.showRightIconGroup = showRightIconGroupIn;
	}
	get showRightIconGroupIn(): boolean {
		return this.showRightIconGroup;
	}

	changeIcnGroupView() {
		this.showRightIconGroupIn = !this.showRightIconGroupIn;
	}

}
