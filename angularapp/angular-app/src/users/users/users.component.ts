import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../user.service";
import { NgForm } from '@angular/forms';

export interface UserObject {
    users: User[]
}

export interface User {
    id: number;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    verified: boolean;
    age: number;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
    public users: User[] = [];
    newUser: User = { id: 0, username: '', email: '', createdAt: new Date(), updatedAt: new Date(), verified: false, age: 0 };

    constructor (
        private userService: UserService
    ) { }

    ngOnInit(): void {
        this.userService.getUsers().subscribe((users) => {
            this.users = users.users;
        });
    }

    addUser(userForm: NgForm) {
        if (userForm.valid) {
            this.userService.addUser(this.newUser).subscribe((response) => {
                console.log('User added successfully:', response);
                this.newUser = { id: 0, username: '', email: '', createdAt: new Date(), updatedAt: new Date(), verified: false, age: 0 };
                userForm.resetForm();
                this.ngOnInit();
            });
        }
    }
}
