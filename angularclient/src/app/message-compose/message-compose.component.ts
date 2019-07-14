import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { MessageService} from "../messageService";
import {Message} from "../message";
import {MessageListComponent} from "../message-list/message-list.component";

@Component({
  selector: 'app-message-compose',
  templateUrl: './message-compose.component.html',
  styleUrls: ['./message-compose.component.css']
})
export class MessageComposeComponent implements OnInit {

  message: Message;



  constructor(private route: ActivatedRoute, private router: Router, private messageService: MessageService) {
    this.message = new Message();


  }

  onSubmit(){
    this.messageService.save(this.message).subscribe(result => console.log("test"));


  }


  ngOnInit() {

  }

}
