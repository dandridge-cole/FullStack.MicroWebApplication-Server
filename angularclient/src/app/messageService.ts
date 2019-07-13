import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Message } from "./message";
import { Observable} from "rxjs";

@Injectable()
export class MessageService{
  readonly messagesUrl: string;

  constructor(private http: HttpClient){
    this.messagesUrl= 'http://localhost:8080/messages';
  }

  public save(message: Message){
    console.log(this.messagesUrl)
    console.log(message)
    return this.http.post(this.messagesUrl, message);
  }




}
