import { Injectable } from '@angular/core';

@Injectable()
export class TaskList {
  public getTaskList(): any[] {
    return [
    	{ desc: 'it reads data from local storage', stats: 'doing'},
      { desc: 'Follow me for more', stats: 'done'},
      { desc: 'Love it if you like it', stats: 'done'},
      { desc: 'Take some notes', stats: 'done'},
      { desc: 'This one is done', stats: 'done'},
      { desc: 'This is another task already done', stats: 'done'}
    ];
  }
}
