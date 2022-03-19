import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos = [];
  }

  getTodos() {
    return of(this.todos); // The array becomes observable
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(todo: Todo) {
    this.todos.map((currentTodo) => {
      if (currentTodo.id === todo.id) {
        currentTodo.isCompleted = !currentTodo.isCompleted;
      }
    });
  }

  removeTodo(todo: Todo) {
    let currTodoIdx = this.todos.findIndex(
      (currentTodo) => currentTodo.id === todo.id
    );
    this.todos.splice(currTodoIdx, 1);
  }
}
