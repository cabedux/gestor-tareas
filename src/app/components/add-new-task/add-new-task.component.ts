import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.scss']
})
export class AddNewTaskComponent implements OnInit {

  description: string;

  @Output() newTask = new EventEmitter<string>(false);
  constructor() { }

  ngOnInit(): void {
  }
  pressEnter(e: any): void{
      console.log(e.keyCode);
  }
  guardar(value: string): void{
    this.description = value;
    this.newTask.emit(value);
    console.log('guardado');
    this.description = '';
  }
}
