import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User, UserObject} from "./users/users.component";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private baseUrl = 'http://localhost:5000/users';

    constructor(private http: HttpClient) { }

    getUsers(): Observable<UserObject> {
        return this.http.get<UserObject>(this.baseUrl);
    }

    addUser(user: User): Observable<any> {
        return this.http.post(this.baseUrl + '/adduser', user);
    }
}
