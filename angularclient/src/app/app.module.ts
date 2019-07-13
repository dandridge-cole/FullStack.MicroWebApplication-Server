import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginbarComponent } from './loginbar/loginbar.component';
import { MessageComposeComponent } from './message-compose/message-compose.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginbarComponent,
    MessageComposeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
