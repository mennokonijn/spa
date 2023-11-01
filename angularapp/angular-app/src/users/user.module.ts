import {NgModule} from "@angular/core";
import {AppComponent} from "../app/app.component";
import { UsersComponent } from './users/users.component';
import {CommonModule} from "@angular/common";
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        UsersComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class UserModule { }
