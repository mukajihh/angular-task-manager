import { Component } from '@angular/core';
import { SearchPipe } from './pipe/search.pipe';
import { CheckPipe } from './pipe/check.pipe';

import { Task } from './class/class.task';
import { TaskList } from './service/service.taskList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent{
  query: string = '';
  description: string = '';

  private headerType: string = 'add';

  public taskList: Array<Task>;
  public taskCount: number = 0;
  public taskDoneCount: number = 0;
  public taskDoingCount: number = 0;

  constructor( list: TaskList ) {
    this.taskList = list.getTaskList();
  }

  public changeTab(event): void {
    switch (event) {
      case "add":
        this.headerType = 'add';
        break;

      case "search":
        this.headerType = 'search';
        break;
    }
    this.query = null;
    this.description = null;
  }

  public addTask(desc: string): void {
    if (this.taskExists(desc)) {
      alert('Task already Exists');
      return;
    }
    this.taskList.push(new Task(desc));
    this.updateFooter();
  }

  public removeTask(task:Task): void {
    this.taskList.splice(this.taskList.indexOf(task), 1);
    this.updateFooter();
  }

  public makeTaskDone(task: Task): void {
    this.taskList[this.taskList.indexOf(task)].stats = 'done';
    this.updateFooter();
  }

  public updateFooter(): void {
    this.taskCount = this.taskList.length;
    this.taskDoingCount = 0;
    this.taskDoneCount = 0;
    this.taskList.forEach(task => {
      if (task.stats == 'done') {
        this.taskDoneCount++;
      } else {
        this.taskDoingCount++;
      }
    })
  }

  public taskExists(desc: string): boolean {
    let exists = false;
    this.taskList.forEach(task => {
      if (task.desc === desc) {
        return exists = true;
      }
    })
    return exists;
  }
}
