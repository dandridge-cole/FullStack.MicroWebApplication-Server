import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginbarComponent } from './loginbar/loginbar.component';
import { ChannellistComponent } from './channellist/channellist.component';


@NgModule({
  declarations: [
    AppComponent,

    LoginbarComponent,

    ChannellistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
