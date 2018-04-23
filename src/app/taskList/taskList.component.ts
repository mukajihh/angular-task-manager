import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../service/service.task';

@Component({
  moduleId: module.id,
  selector: 'task-list',
  templateUrl: './taskList.component.html',
  styleUrls: ['./taskList.component.scss']
})

export class TaskListComponent implements OnInit{
  @Input() taskList: Array<Task>;

  ngOnInit() {
    this.taskList = new Array<Task>();
  }
}
