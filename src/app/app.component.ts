import { Component, EventEmitter } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './taskList/taskList.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  providers: [TaskListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent{
  onNotify(message:string):void {
    alert(message);
  }
}
