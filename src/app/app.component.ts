import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './taskList/taskList.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
