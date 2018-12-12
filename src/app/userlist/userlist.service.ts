import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserlistService {
    private url: string = 'https://randomuser.me/api/?results=';
    constructor(private http: HttpClient) { }

    getMembers(): Observable<any> {
        const url = this.url + '5&exc=login&seed=rti';
        return this.http.get(url);
    }
    loadMoreUsers(count: number = 20): Observable<any> {
        const url = this.url + `${count}&exc=login&seed=rti`;
        return this.http.get(url);
    }
}