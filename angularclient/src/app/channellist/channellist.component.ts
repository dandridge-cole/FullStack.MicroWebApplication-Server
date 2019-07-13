import { Component, OnInit } from '@angular/core';
import { Channel} from '../channel';
import {User} from '../user';

@Component({
  selector: 'app-channellist',
  templateUrl: './channellist.component.html',
  styleUrls: ['./channellist.component.css']
})
export class ChannellistComponent implements OnInit {
  channels = CHANNELS;
  users = USERS;

  selectedChannel: Channel;
  selectedUser: User;


  constructor() { }

  ngOnInit() {

  }


  onChannelSelect(channel: Channel): void{
    this.selectedChannel=channel;
    this.selectedUser=null;
  }
  onUserSelect(user: User): void{
    this.selectedChannel=null;
    this.selectedUser=user;
  }



}
