import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public removeToken(): void {
    localStorage.removeItem('token');
  }

  public setUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  public removeUser(): void {
    localStorage.removeItem('user');
  }

}
