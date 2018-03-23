import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-post-expanded',
	templateUrl: './post-expanded.component.html',
	styleUrls: ['./post-expanded.component.scss']
})
export class PostExpandedComponent implements OnInit {

	authorName: string;
	postContentType: string;
	postAge: string;
	postTitle: string;

	constructor() {
		this.authorName = 'Author Name';
		this.postAge = '1m';
		this.postContentType = 'video';
		this.postTitle = 'Post Title!';
	}

	ngOnInit() {
	}

}
