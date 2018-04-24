import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { Task } from './service/service.task'


import { SearchPipe } from './pipe/search.pipe';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ Task ],
  bootstrap: [AppComponent]
})
export class AppModule { }
