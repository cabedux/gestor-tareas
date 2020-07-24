import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AddNewTaskComponent } from './components/add-new-task/add-new-task.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CheckTaskDirective } from './check-task.directive';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    AddNewTaskComponent,
    CheckTaskDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
