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
  // ngModels
  query: string = '';
  description: string = '';

  // Context to header
  private headerType: string = 'add';

  // Pipe to order the Task List by stats ("doing"/"done")
  private order = new CheckPipe();

  // Controls and Counts from task List
  public taskList: Array<Task>;
  public taskCount: number = 0;
  public taskDoneCount: number = 0;
  public taskDoingCount: number = 0;

  // Populate Task List to test
  constructor( list: TaskList ) {
    this.taskList = list.getTaskList();
  }

  // Event to toggle the context from header ('add'/'search')
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

  // Event to Add a new Task to the list
  public addTask(desc: string): void {

    //If the new Task already exists, alert and refuses entry
    if (this.taskExists(desc)) {
      alert('Task already Exists');
      return;
    }

    // Update the Task List, reorder, and update Footer informations
    this.taskList.push(new Task(desc));
    this.taskList = this.order.transform(this.taskList);
    this.updateFooter();
  }

  // Event to Remove a Task from the List and update the Footer
  public removeTask(task:Task): void {
    this.taskList.splice(this.taskList.indexOf(task), 1);
    this.updateFooter();
  }

  // Event to make the Task as Done. Reorder. Update Footer
  public makeTaskDone(task: Task): void {
    this.taskList[this.taskList.indexOf(task)].stats = 'done';
    this.taskList = this.order.transform(this.taskList);
    this.updateFooter();
  }

  // Method to update Footer counters
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
    });
  }

  // Method to verify if method already exists
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
