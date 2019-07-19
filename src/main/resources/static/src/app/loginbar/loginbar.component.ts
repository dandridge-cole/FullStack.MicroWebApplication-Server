import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import{ User} from "../user";
import {UserService} from "../channellist/userService";



@Component({
  selector: 'app-loginbar',
  templateUrl: './loginbar.component.html',
  styleUrls: ['./loginbar.component.css']
})
export class LoginbarComponent implements OnInit {

  userToAuth: User;
  userIsAuthenticated: boolean;
  userReturned: User;
  @ViewChild("passwordField") passwordField: ElementRef;
  @ViewChild("userNameField") userNameField: ElementRef;
  @Output() updateMessageComponents = new EventEmitter();
  newUserModal: boolean;
  showNavBar: boolean;

  constructor(private userService: UserService) {
    this.userToAuth = new User();
    this.userIsAuthenticated = false;
    this.newUserModal = false;
    this.showNavBar = true;

  }

  ngOnInit() {
  }


  async onLogin() {
    await this.userService.authenticateUser(this.userToAuth).then(data => this.userReturned = data);
    if(this.userReturned === null){
    }else {this.userIsAuthenticated = true;}
    console.log(this.userReturned);
    this.updateMessageComponents.emit();

    this.clearField();
    }



  clearField(){
    this.passwordField.nativeElement.value = '';
    this.userNameField.nativeElement.value = '';
  }

  updateNewUserModal(){
    if(this.newUserModal === false){
      this.newUserModal = true;
      this.showNavBar = false;
    }else{this.newUserModal = false;
    this.showNavBar=true;}
  }

   async createNewUser(){
    console.log(this.userToAuth);
    this.userService.createNewUser(this.userToAuth);
    this.updateNewUserModal();

  }



}
