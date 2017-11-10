import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

    constructor (private http: Http) {}

    getUserDetails(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/posts').map( res => res.json());
    }

}
