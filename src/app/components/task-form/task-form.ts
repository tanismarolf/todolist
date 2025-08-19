import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService, Task } from '../../services/task';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css'
})
export class TaskForm {
  newTask: Task = {
    id:0,
    title:'',
    description: '',
    deadline: '',
    completed: false
  };

  constructor(private taskService: TaskService){}


  addTask() {
    if (this.newTask.title.trim() && this.newTask.deadline) {
      this.taskService.addTask({ ...this.newTask });
      this.newTask = { id:0, title:'', description:'', deadline:'', completed: false}
    }
  }

}
