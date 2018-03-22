import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostMinifiedComponent } from './post-minified/post-minified.component';
import { PostExpandedComponent } from './post-expanded/post-expanded.component';
import { ListOfPostsComponent } from './list-of-posts/list-of-posts.component';
import { MatCardModule } from '@angular/material';
@NgModule({
	imports: [
		CommonModule,
		MatCardModule
	],
	declarations: [
		PostMinifiedComponent, PostExpandedComponent, ListOfPostsComponent
	],
	exports: [PostMinifiedComponent, PostExpandedComponent, ListOfPostsComponent]
})
export class PostCardModule { }
