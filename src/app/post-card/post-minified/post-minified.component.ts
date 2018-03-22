import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-post-minified',
	templateUrl: './post-minified.component.html',
	styleUrls: ['./post-minified.component.scss']
})
export class PostMinifiedComponent implements OnInit {
	postTitle: string;
	postImgSrc: string;
	postContentText: string;
	authorName: string;
	postAge: string;
	postContentType: string;
	constructor() {
		this.authorName = 'Author Name';
		this.postAge = '1m';
		this.postContentType = 'video';
		this.postTitle = 'Post Title!';
		this.postImgSrc = 'http://img.youtube.com/vi/W7qWa52k-nE/0.jpg';
		this.postContentText = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.';
	}

	ngOnInit() {
	}

}
