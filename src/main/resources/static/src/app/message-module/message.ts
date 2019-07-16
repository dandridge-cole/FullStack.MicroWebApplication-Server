
import {Input} from "@angular/core";
import {User} from "../user";

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

  updateFrom(user:User){
    this.fromUsername = user.username;
    this.fromUserId = user.id;
  }

}
