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

  async onSubmit(){
    this.saveMessage();
    await this.delay(500);
    this.sendEmit();
  }

  delay(ms: number){
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  sendEmit(){
    this.updateMessages.emit(this.message);
  }

  saveMessage(){
    this.messageService.save(this.message).subscribe();
  }

  ngOnInit() {

  }

}
