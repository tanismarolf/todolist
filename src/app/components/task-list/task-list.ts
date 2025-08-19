import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService, Task } from '../../services/task';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList implements OnInit {
  tasks: Task[] = [];

    constructor (private taskService: TaskService) {}

    ngOnInit(): void {
        this.tasks = this.taskService.getTasks();
    }

    deleteTask(id: number) {
      this.taskService.deleteTask(id);
      this.tasks = this.taskService.getTasks();
    }






    

}
