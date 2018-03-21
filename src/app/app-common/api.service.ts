import { Injectable } from '@angular/core';

import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

	constructor(private http: Http) { }

	get(url, data) {
		return this.http.get(url, data)
			.map(res => res.json())
			.catch(this.handleError);
	}

	post(url, data) {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		const options = new RequestOptions({ headers: headers });
		return this.http.post(url, data, options)
			.map(res => res.json())
			.catch(this.handleError);
	}

	put(url, data) {
		return this.http.put(url, data)
			.map(res => res.json())
			.catch(this.handleError);
	}

	delete(url, data) {
		return this.http.delete(url, data)
			.map(res => res.json())
			.catch(this.handleError);
	}

	private handleError(error: Response | any) {
		alert('error: ' + error);
		return Observable.throw(error);
	}
}
