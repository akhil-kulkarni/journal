import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-jnl-header',
	// inputs: ['showHdrLogo', 'showSearchBar', 'showRightIconGroup'],
	templateUrl: './jnl-header.component.html',
	styleUrls: ['./jnl-header.component.scss'],
})
export class JnlHeaderComponent implements OnInit {


	showHdrLogo: boolean;
	showSearchBar: boolean;
	showRightIconGroup: boolean;
	showNotif: boolean;
	constructor() {


		// this.showSearchBar = (this.showSearchBarIn === 'true');
		// this.showRightIconGroup = (this.showRightIconGroupIn === 'true');
	}

	@Input()
	set showHdrLogoIn(showHdrLogoIn: string) {
		console.log('showHdrLogoIn: ' + showHdrLogoIn);
		this.showHdrLogo = (showHdrLogoIn === 'true');
	}

	@Input()
	set showSearchBarIn(showSearchBarIn: string) {
		console.log('showSearchBarIn: ' + showSearchBarIn);
		this.showSearchBar = (showSearchBarIn === 'true');
	}

	@Input()
	set showRightIconGroupIn(showRightIconGroupIn: string) {
		console.log('showRightIconGroupIn: ' + showRightIconGroupIn);
		this.showRightIconGroup = (showRightIconGroupIn === 'true');
	}

	ngOnInit() {
	}

}
