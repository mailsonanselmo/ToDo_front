import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.baseUrl);
  }

  update(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.baseUrl}/${todo.id}`, todo);
  }

  delete(id: any): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl, todo);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }







  
}
