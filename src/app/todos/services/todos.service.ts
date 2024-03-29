import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { FilterEnum } from "../components/todos/types/filter.enum";
import { TodoInterface } from "../components/todos/types/todo.interface";



@Injectable()
export class TodosService {
    todos$ = new BehaviorSubject<TodoInterface[]>([]);
    filter$ = new BehaviorSubject<FilterEnum>(FilterEnum.all)
    
    addTodo(text: string): void {
        const newTodo: TodoInterface = {
            text,
            isCompleted: false,
            id: Math.random().toString(16),
        };
        const updatedRodos = [...this.todos$.getValue(), newTodo]
        this.todos$.next(updatedRodos);
    }

    toggleAll(isCompleted: boolean): void {
        
        const updatedTodos = this.todos$.getValue().map(todo => {
            return {
                ...todo,
                isCompleted,
            };
        })
    this.todos$.next(updatedTodos);        
    }
    changeFilter(filterName: FilterEnum): void {
        this.filter$.next(filterName);
    }
    changeTodo(id: string, text: string): void {
        const updatedTodos = this.todos$.getValue().map(todo => {
        if (todo.id === id) {
            return {
                ...todo,
                text,
            };
        }   
        return todo
        });
        this.todos$.next(updatedTodos); 
    }
    removeTodo(id: string): void {
        const updatedTodos = this.todos$.getValue().filter((todo) => todo.id !== id);
        this.todos$.next(updatedTodos);
    }
    toggleTodo(id: string): void {
        const updatedTodos = this.todos$.getValue().map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              isCompleted: !todo.isCompleted,
            };
          }
          return todo;
        });
        this.todos$.next(updatedTodos);
      }
}