import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  NUE!: string;
  password!: string;

  constructor() {}

  login() {
    console.log('NUE: ',this.NUE);
    console.log('password', this.password);
  }
}
