import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() tasks: Task[] = [];
  completedTask: number;
  constructor() { }

  ngOnInit(): void {
    this.completedTask = this.tasks.filter(task => task.complete === true).length;
  }

  click(item: Task): void{
      this.changeState(item, this.tasks);
      this.completedTask = this.tasks.filter(task => task.complete === true).length;
  }

  private changeState(item: Task, list: Task[]): void {
    list.filter(x => x.id === item.id ? x.complete = !x.complete : null);
  }
}
