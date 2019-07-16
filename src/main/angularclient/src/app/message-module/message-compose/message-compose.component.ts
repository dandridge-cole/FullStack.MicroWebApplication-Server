import {Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { MessageService} from "../messageService";
import {Message} from "../message";
import {_document} from "@angular/platform-browser/src/browser";


@Component({
  selector: 'app-message-compose',
  templateUrl: './message-compose.component.html',
  styleUrls: ['./message-compose.component.css']
})
export class MessageComposeComponent implements OnInit {

  message: Message;
  @Output() updateMessages = new EventEmitter();
  channelNumber: number;
  @ViewChild("messageField") messageField: ElementRef;




  constructor(private route: ActivatedRoute, private router: Router, private messageService: MessageService) {
    this.message = new Message();

  }

  async onSubmit(){

    this.message.updateChannel(this.channelNumber);
    this.saveMessage();
    await this.delay(200);
    this.sendEmit();
  }

  delay(ms: number){
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  async sendEmit(){
    console.log(this.message);
    this.updateMessages.emit(this.message);
  }

  saveMessage(){
    this.messageService.save(this.message).subscribe();
  }

  updateChannelNumber(channelNumber: number){
    this.channelNumber=channelNumber;
  }

  clearField(){
    this.messageField.nativeElement.value = '';
  }

  ngOnInit() {
    this.channelNumber = 2;
  }

}
