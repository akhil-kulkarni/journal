import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';

import { HomePageModule } from './main/home-page/home-page.module';
import { HomePageComponent } from './main/home-page/home-page.component';

import { CustomPreloadingStrategy } from './preloading-strategy';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'login'
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'main',
		loadChildren: './main/main.module#MainModule'
	}
];

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		LoginModule,
		BrowserModule,
		RouterModule.forRoot(routes, {
			preloadingStrategy: CustomPreloadingStrategy, enableTracing: true
		})
	],
	providers: [CustomPreloadingStrategy],
	bootstrap: [AppComponent]
})
export class AppModule { }
