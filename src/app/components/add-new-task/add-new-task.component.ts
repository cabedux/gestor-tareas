import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Task } from './../../models/task';
import { v4 as uuid } from 'uuid';
import { iif } from 'rxjs';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.scss']
})
export class AddNewTaskComponent implements OnInit {


  @Output() addNewTask = new EventEmitter<Task>(false);
  constructor() { }

  ngOnInit(): void {
  }
  // pressEnter(e: any): void{
  //     console.log(e.keyCode);
  // }
  guardar(value: any): void{
    if (value.description){
      const newTask = new Task();
      newTask.id = uuid();
      newTask.description = value.description;
      this.addNewTask.emit(newTask);
    }

  }
}
