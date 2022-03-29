import { NgModule } from "@angular/core";
import { TodoComponent } from "src/app/todos/components/todos/todos.component";
import { RouterModule, Routes } from "@angular/router"

const routes: Routes = [
    {
        path: '',
        component: TodoComponent,
    }
]
@NgModule({
    declarations: [TodoComponent],
    imports: [RouterModule.forChild(routes)],
})
export class TodosModule {}