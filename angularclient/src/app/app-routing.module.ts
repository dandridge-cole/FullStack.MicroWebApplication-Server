import {NgModule} from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { MessageListComponent} from "./message-list/message-list.component";
import { MessageComposeComponent} from "./message-compose/message-compose.component";

const routes: Routes = [
  { path: 'messages', component: MessageComposeComponent},
  { path: 'messages', component: MessageListComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}
