import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../class/class.task'

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: Task[], searchText: string): Task[] {
    if(!items) return [];
    if(!searchText) return items;
    return items.filter( task => task.desc.toLowerCase().includes(searchText.toLowerCase()));
  }
}
