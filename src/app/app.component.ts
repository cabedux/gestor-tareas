import { Component } from '@angular/core';
import { Task } from './models/task';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gestor-tareas';
  tasks: Task[] = [];

  constructor(){
    const taskTest1 = new Task();
    taskTest1.id = uuid();
    taskTest1.description = 'prueba';
    this.tasks.push(taskTest1);

    const taskTest2 = new Task();
    taskTest2.id = uuid();
    taskTest2.description = 'prueba2';
    taskTest2.complete = true;
    this.tasks.push(taskTest2);
  }
  addTask(value: Task): void{
    this.tasks.push(value);
  }
}
