import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TaskObject} from "./task/task.component";

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    private baseUrl = 'http://localhost:5000/tasks';

    constructor(private http: HttpClient) { }

    getTasks(): Observable<TaskObject> {
        return this.http.get<TaskObject>(this.baseUrl);
    }
}
