import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TaskList } from './service/service.taskList';
import { Task } from './class/class.task';


import { SearchPipe } from './pipe/search.pipe';
import { CheckPipe } from './pipe/check.pipe';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    CheckPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ Task, TaskList ],
  bootstrap: [AppComponent]
})
export class AppModule { }
