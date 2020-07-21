import { Component } from '@angular/core';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gestor-tareas';
  tasks: Task[] = [];

  constructor(){
    this.tasks.push({id: 1, description: 'prueba', complete: false});
  }
}
