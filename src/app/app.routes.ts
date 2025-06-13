import {Routes} from '@angular/router';
import {HomepageComponent} from "./features/homepage/homepage.component";
import {TodosComponent} from "./todos/todos.component";
import {ContactComponent} from "./features/contact/contact.component";
import {InquireComponent} from "./features/inquire/inquire.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent},
  {path: 'inquire', component: InquireComponent},
  {path: 'todo', component: TodosComponent},
  {path: 'contact', component: ContactComponent}
]
