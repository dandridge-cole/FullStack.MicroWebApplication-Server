import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Message } from "./message";
import { Observable} from "rxjs";

@Injectable()
export class MessageService{
  private messagesUrl: string;
  sendto: string;

  constructor(private http: HttpClient){
    this.messagesUrl= 'http://localhost:8080/messages';
  }

  public save(message: Message){
    return this.http.post(this.messagesUrl, message);
  }

  public findAll(channelId: number): Observable<Message[]> {

    this.sendto = 'http://localhost:8080/messages/' + channelId;
    return this.http.get<Message[]>(this.sendto);
  }



}
