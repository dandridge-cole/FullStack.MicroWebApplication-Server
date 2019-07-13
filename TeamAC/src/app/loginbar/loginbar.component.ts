import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginbar',
  template: `
    <p>
      loginbar works!
    </p>
    
    <h1>WELCOME</h1>
    
  `,
  styleUrls: ['./loginbar.component.css']
})
export class LoginbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
