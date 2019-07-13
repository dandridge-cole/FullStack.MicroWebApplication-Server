import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginbarComponent } from './loginbar/loginbar.component';
<<<<<<< HEAD
import { ChannellistComponent } from './channellist/channellist.component';
=======
import { MessageComposeComponent } from './message-compose/message-compose.component';
>>>>>>> e46f8fc46e4c3a26acb9f4810c0d51709fc89565


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD

    LoginbarComponent,

    ChannellistComponent
=======
    LoginbarComponent,
    MessageComposeComponent
>>>>>>> e46f8fc46e4c3a26acb9f4810c0d51709fc89565
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
