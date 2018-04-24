import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../class/class.task'

@Pipe({
  name: 'orderBy'
})
export class CheckPipe implements PipeTransform {
  transform(items: Task[], args?: any): Task[] {
    console.log(items);
    return items.sort((a, b) => {
    	if(a[args.property] < b[args.property]){
        return -1;
      }
      else if( a[args.property] > b[args.property]){
        return 1;
      }
      else{
        return 0;
      }
    });
  }
}
