import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Channel} from '../channel';
import {User} from '../user';
import {MessageService} from "../message-module/messageService";
import {UserService} from "./userService";
import {ChannelService} from "./channelService";

@Component({
  selector: 'app-channellist',
  templateUrl: './channellist.component.html',
  styleUrls: ['./channellist.component.css']
})
export class ChannellistComponent implements OnInit {
   channels: Channel[];
   users: User[];

  selectedChannel: Channel;
  selectedUser: User;
  @Output() updateOtherModules = new EventEmitter();


  constructor(private userService: UserService, private channelService: ChannelService) { }

  ngOnInit() {
    this.userService.findAll().subscribe(data => this.users = data)
    this.channelService.findAll().subscribe(data => this.channels = data)
  }

  onChannelSelect(channel: Channel): void{
    this.selectedChannel=channel;
    this.selectedUser=null;
    this.updateSelectedItem();


  }

  onUserSelect(user: User): void{
    this.selectedChannel=null;
    this.selectedUser=user;
    this.updateSelectedItem();

  }

  updateSelectedItem(){
    this.updateOtherModules.emit(this.selectedChannel.id);

  }

}
