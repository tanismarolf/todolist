import { Component } from '@angular/core';
import { TaskForm } from "./components/task-form/task-form";
import { TaskListComponent } from "./components/task-list/task-list";

@Component({
  selector: 'app-root',
  imports: [TaskForm, TaskListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'todo-app';
}
