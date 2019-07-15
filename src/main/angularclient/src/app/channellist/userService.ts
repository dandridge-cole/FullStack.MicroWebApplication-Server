import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { User } from "../user";
import { Observable} from "rxjs";

@Injectable()
export class UserService{
  private usersUrl: string;
  sendto: string;

  constructor(private http: HttpClient){
    this.usersUrl= 'http://localhost:8080/users';
  }

  public findAll(): Observable<User[]> {

    this.sendto = 'http://localhost:8080/users';
    return this.http.get<User[]>(this.sendto);
  }

}
