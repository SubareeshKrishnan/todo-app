import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/model';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  faTrashAlt = faTrashAlt;
  constructor(private todoService: TodoService) {} // To use this service throughout of the class privately.

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  changeTodoStatus(todo: Todo) {
    this.todoService.updateTodo(todo);
  }

  deleteTodo(todo: Todo) {
    this.todoService.removeTodo(todo);
  }
}
