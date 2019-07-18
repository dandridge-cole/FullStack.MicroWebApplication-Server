import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Channel } from "../channel";
import { Observable} from "rxjs";

@Injectable()
export class ChannelService{
  private channelsUrl: string;
  sendto: string;

  constructor(private http: HttpClient){
    this.channelsUrl= 'http://localhost:8080/channels';
  }

  public findAll(): Observable<Channel[]> {

    this.sendto = 'http://localhost:8080/channels';
    return this.http.get<Channel[]>(this.sendto);
  }

}
