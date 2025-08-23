import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Task {
  id: number;
  title: string;
  description: string;
  deadline: string;
  completed: boolean;
  
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';
  constructor (private http: HttpClient) {}

/*private tasks: Task[] = [
    {id: 1, title:'faire les course', description: 'acheter du lait et du pain', deadline: '2025-08-16',completed: false},
    {id: 2, title:'pratiquer angular', description: 'pratiquer la liason avec le backend API', deadline: '2025-08-20', completed: false},
    {id: 3, title:'devoir', description: 'devoir de groupe', deadline:'2025-08-19', completed: false}
  ];
*/

 // GET toutes les tâches
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  // POST ajouter une tâche
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  // PUT mettre à jour une tâche
  updateTask(id: number, task: Task): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, task);
  }

  // DELETE supprimer une tâche
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
} 


   /*  {id:3, title: 'examne de python' description: 'passer cet examen pour decrocher le certification', deadline: '2025-08-15' completed: true }
   

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task) {
    task.id = this.tasks.length + 1;
    this.tasks.push(task);
  }

  updateTask(task: Task) {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
    }
  }

  deleteTask(id: number) {
    this.tasks =this.tasks.filter(t => t.id !== id);
  }

} */