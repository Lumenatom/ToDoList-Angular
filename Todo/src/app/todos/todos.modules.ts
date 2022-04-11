import { NgModule } from "@angular/core";
import { TodoComponent } from "src/app/todos/components/todos/todos.component";
import { RouterModule, Routes } from "@angular/router"
import { HeaderComponent } from "./components/header/header.component";
import { TodosService } from "./services/todos.service";
import { MainComponent } from "./components/main/main.component";

const routes: Routes = [
    {
        path: '',
        component: TodoComponent,
    }
]
@NgModule({
    declarations: [TodoComponent, HeaderComponent, MainComponent],
    imports: [RouterModule.forChild(routes)],
    providers: [TodosService],
})
export class TodosModule {}