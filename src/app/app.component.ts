import { Component } from '@angular/core';
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
  public taskCount: number = 0;
  public taskDoneCount: number = 0;
  public taskDoingCount: number = 0;

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
    this.updateFooter();
  }

  public removeTask(task:Task): void {
    this.taskList.splice(this.taskList.indexOf(task), 1);
    this.updateFooter();
  }

  public makeTaskDone(task: Task): void {
    this.taskList[this.taskList.indexOf(task)].stats = 'checked';
    this.updateFooter();
  }

  public updateFooter(): void {
    this.taskCount = this.taskList.length;
    this.taskDoingCount = 0;
    this.taskDoneCount = 0;
    this.taskList.forEach(task => {
      if (task.stats == 'checked') {
        this.taskDoneCount++;
      } else {
        this.taskDoingCount++;
      }
    })
  }
}
