import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { SearchPipe } from './pipe/search.pipe';

import { Task } from './service/service.task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{

  private headerType: string = 'add';
  public taskList: Array<Task> = [];

  public changeTab(event): void {
    switch (event) {
      case "add":
        this.headerType = 'add';
        break;

      case "search":
        this.headerType = 'search';
        break;
    }
  }

  public addTask(desc: string): void {
    this.taskList.push(new Task(desc));
  }

  public removeTask(task:Task): void {
    this.taskList.splice(this.taskList.indexOf(task), 1);
  }

  public makeTaskDone(task: Task): void {
    this.taskList[this.taskList.indexOf(task)].stats = 'checked';
  }
}
