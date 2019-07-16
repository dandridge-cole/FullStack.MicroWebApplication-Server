import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { User } from "../user";
import { Observable} from "rxjs";
import {from} from "rxjs/observable/from";


@Injectable()
export class UserService{
  private usersUrl: string;
  sendto: string;
  toReturn: Observable<User>;


  constructor(private http: HttpClient){
    this.usersUrl= 'http://localhost:8080/users';
  }

  public findAll(): Observable<User[]> {

    this.sendto = 'http://localhost:8080/users';
    return this.http.get<User[]>(this.sendto);
  }

  async authenticateUser(user: User){
    this.sendto = this.usersUrl+ "/auth/" + user.username+ "/"+ user.password;
    console.log(this.sendto);


    const t = await this.http.get<User>(this.sendto).toPromise();

    this.delay(1000)


    return t;


  }

  delay(ms: number){
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
