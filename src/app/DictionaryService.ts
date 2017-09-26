import { Http, Headers, Response, Jsonp, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class DictionaryService {
    constructor(private http: Http) {}

    getDirectory = (): Observable<Response> => {
        console.log('In getDirectory of service.ts');
        return this.http.get('assets/class-email-dictionary.json')
                    .map(res => res.json());
    }
}