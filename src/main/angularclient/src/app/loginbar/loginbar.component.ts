import { Component, OnInit } from '@angular/core';
import{ User} from "../user";
import {UserService} from "../channellist/userService";
import { Observable } from "rxjs/Observable"


@Component({
  selector: 'app-loginbar',
  templateUrl: './loginbar.component.html',
  styleUrls: ['./loginbar.component.css']
})
export class LoginbarComponent implements OnInit {

  userToAuth: User;
  userIsAuthenticated: boolean;
  userReturned: User;

  constructor(private userService: UserService) {
    this.userToAuth = new User();
    this.userIsAuthenticated = false;

  }

  ngOnInit() {
  }

  delay(ms: number){
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  async onLogin() {

    await this.userService.authenticateUser(this.userToAuth).then(data => this.userReturned = data);

    if(this.userReturned === null){

    }else {this.userIsAuthenticated = true;}



    console.log(this.userReturned);



      // if(this.userService.authenticateUser(this.userToAuth)===null ){
      //
      // } else {this.userIsAuthenticated=true;}
    }


}
