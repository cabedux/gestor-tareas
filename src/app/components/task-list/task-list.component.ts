import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() tasks: Task[] = [];
  completeTaks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tasks.filter(x =>  (x.complete === true) ? this.completeTaks.push(x) : null);

  }

  click(item: Task): void{
    if (!item.complete){
      const index =  this.tasks.findIndex(x => x.id === item.id);
      this.completeTaks.push(this.tasks[index]);
      this.changeState(item, this.tasks);
    }
    else{
      const index =  this.completeTaks.findIndex(x => x.id === item.id);
      this.completeTaks.splice(index, 1);
      this.changeState(item, this.tasks );
    }
    console.log(this.tasks);
    console.log(this.completeTaks);
  }

  private changeState(item: Task, list: Task[]): void {
    list.filter(x => x.id === item.id ? x.complete = !x.complete : null);
  }
}
