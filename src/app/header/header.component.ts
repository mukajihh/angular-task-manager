import { Component, EventEmitter, Output } from '@angular/core';
import { AppComponent } from '../app.component';

import * as $ from 'jquery';

@Component({
  moduleId: module.id,
  selector: 'task-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  private headerType: string = 'add';

  public changeTab(event): void {
    let classToggle = $(event.target).attr('class').split(' ')[0];
    let header = $('#header-left');
    let input = $('#input-text input');
    let icon = $('#input-text .input-icon');

    if (header.attr('class') == classToggle) {
      return;
    }

    switch (classToggle) {
      case "add":
        header.removeClass('search').addClass('add');
        input.attr('placeholder', 'Add a task...');
        icon.removeClass('fa-search').addClass('fa-plus');
        break;

      case "search":
        header.removeClass('add').addClass('search');
        input.attr('placeholder', 'Search a task...');
        icon.removeClass('fa-plus').addClass('fa-search');
        break;
    }
  }

  public iconClick(event): void {
    let el = $(event.target);
    let func = el.attr('class').split(' ')[2];
    let input = $('#input-text input')[0];
    let str = input.value;

    switch (func) {
      case "fa-plus":
        func = 'add';
        break;
      
      case "fa-search":
        func = 'search';
        break;
    }

    this.notify.emit(func + '#' + str);
  }
}
