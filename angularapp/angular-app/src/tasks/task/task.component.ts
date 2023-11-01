import { Component } from '@angular/core';
import {TasksService} from "../tasks.service";

export interface TaskObject {
    tasks: Task[];
}

export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
    tasks: Task[] = [];

    constructor (
        private tasksService: TasksService
    ) { }

    ngOnInit(): void {
        this.tasksService.getTasks().subscribe((tasks) => {
            this.tasks = tasks.tasks;
        });
    }
}
