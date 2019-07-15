
import {Input} from "@angular/core";

export class Message{
  id: number;
  fromUserId: number;
  @Input() toChannelId;
  body: string;
  fromUsername: string;


  constructor(){

    this.fromUserId = 2;
    this.fromUsername = "corby";
    this.toChannelId = 2;
  }


  updateChannel(channelId: number){
    this.toChannelId=channelId;
  }

}
