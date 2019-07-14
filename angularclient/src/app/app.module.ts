import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginbarComponent } from './loginbar/loginbar.component';
import { ChannellistComponent } from './channellist/channellist.component';
import { MessageListComponent } from './message-module/message-list/message-list.component';
import { MessageComposeComponent } from './message-module/message-compose/message-compose.component';
import { AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MessageService} from "./message-module/messageService";
import { MessageModuleComponent } from './message-module/message-module.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginbarComponent,
    ChannellistComponent,
    MessageListComponent,
    LoginbarComponent,
    MessageComposeComponent,
    MessageModuleComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
