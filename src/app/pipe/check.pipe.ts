import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../class/class.task'

@Pipe({
  name: 'orderBy'
})
export class CheckPipe implements PipeTransform {
  property: string = 'stats';
  public transform(items: Task[]): Task[] {
    return items.sort((a, b) => {
      if(a[this.property] < b[this.property]){
        return -1;
      }
      else if( a[this.property] > b[this.property]){
        return 1;
      }
      else{
        return 0;
      }
    });
  }
}
