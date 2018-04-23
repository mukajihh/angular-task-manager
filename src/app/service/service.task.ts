import { Injectable } from '@angular/core';

@Injectable()
export class Task {
  public desc: string;
  public stats: boolean;

  constructor(desc: string) {
    this.desc = desc;
    this.stats = false;
  }
}
