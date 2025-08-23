/*import { Component, OnInit } from '@angular/core';
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
      
}*/

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService, Task } from '../../services/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  newTask: Task = { id: 1 , title: '', description: '', deadline: '', completed: false };

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(data => this.tasks = data);
  }

  addTask() {
    this.taskService.addTask(this.newTask).subscribe(() => {
      this.newTask = { id: 1 , title: '', description: '', deadline: '', completed: false };
      this.loadTasks();
    });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
  }

  isTaskCompleted(task: Task): boolean {
  const today = new Date();
  const taskDate = new Date(task.deadline);
  
  // Si la tâche est marquée comme complétée OU si la date limite est passée
  return task.completed || taskDate < today;
}

}







    


