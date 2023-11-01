import { NgModule } from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [TaskComponent],
    imports: [CommonModule],
    providers: [],
})
export class TaskModule {}
