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
}