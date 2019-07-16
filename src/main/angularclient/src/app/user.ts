export class User{
  id: number;
  username: string;
  password: string;
  authenticated: boolean;

  constructor(){
    this.password = null;
    this.authenticated=null;
  }

}
