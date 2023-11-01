import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "../users/users/users.component";
import {TaskComponent} from "../tasks/task/task.component";

const routes: Routes = [
    { path: 'users', component: UsersComponent },
    { path: 'tasks', component: TaskComponent },
    { path: '', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
