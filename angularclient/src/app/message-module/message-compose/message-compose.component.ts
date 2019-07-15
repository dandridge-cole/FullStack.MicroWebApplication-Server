import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { MessageService} from "../messageService";
import {Message} from "../message";


@Component({
  selector: 'app-message-compose',
  templateUrl: './message-compose.component.html',
  styleUrls: ['./message-compose.component.css']
})
export class MessageComposeComponent implements OnInit {

  message: Message;
  @Output() updateMessages = new EventEmitter();


  constructor(private route: ActivatedRoute, private router: Router, private messageService: MessageService) {
    this.message = new Message();

  }

  onSubmit(){

    this.messageService.save(this.message).subscribe();
      this.updateMessages.emit(this.message)

  }


  ngOnInit() {

  }

}
