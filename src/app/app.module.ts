import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AddNewTaskComponent } from './components/add-new-task/add-new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    AddNewTaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
