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

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.findAll(1).subscribe(data => this.messages = data)

  }

  updateMessageList(messageToAdd: Message){
    this.messageService.findAll(1).subscribe(data => this.messages = data);
    this.messages.push(messageToAdd);






  }




}
