import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  NUE!: string;
  password!: string;

  constructor(
    private loginS: LoginService,
    private authS: AuthService
  ) { }

  login() {
    this.loginS.login(this.NUE, this.password).subscribe(
        (response: any) => {
          const token = response.token;
          const user = response.Usuario;

          this.authS.setToken(token);
          this.authS.setUser(user);
          console.log('Login successful, Bienvenido!');
        },
        (error) => {
          console.error('Credenciales incorrectas', error);
        }
      );
  }

}
