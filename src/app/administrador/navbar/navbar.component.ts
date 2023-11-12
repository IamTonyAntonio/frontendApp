import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(
    private authS: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
