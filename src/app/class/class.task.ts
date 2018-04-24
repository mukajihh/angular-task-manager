import { Injectable } from '@angular/core';

@Injectable()
export class Task {
  public desc: string;
  public stats: string;

  constructor(desc: string) {
    this.desc = desc;
    this.stats = 'doing';
  }
}
