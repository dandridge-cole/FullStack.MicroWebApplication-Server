import { Component, OnInit } from '@angular/core';
import { Message} from "../message";
import { MessageService} from "../messageService";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages: Message[];
  selectedChannel: number;


  constructor(private messageService: MessageService) { this.selectedChannel=2;}

  ngOnInit() {
    this.messageService.findAll(this.selectedChannel).subscribe(data => this.messages = data)

  }

   updateMessageList(){
      this.messageService.findAll(this.selectedChannel).subscribe(data => this.messages = data);

  }

  updateSelectedChannel(channel:number){
    this.selectedChannel=channel;
    this.messageService.findAll(channel).subscribe(data=>this.messages=data);
  }

}
