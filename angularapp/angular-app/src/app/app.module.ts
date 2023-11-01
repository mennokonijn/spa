import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TaskModule} from "../tasks/task.module";
import {UserModule} from "../users/user.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TaskModule,
        UserModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
