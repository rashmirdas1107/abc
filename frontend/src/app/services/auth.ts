import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Simple check for demonstration purposes
  private isAuthenticatedUser = false;

  login(): void {
    this.isAuthenticatedUser = true;
    console.log('User logged in. isAuthenticated:', this.isAuthenticatedUser);
  }

  logout(): void {
    this.isAuthenticatedUser = false;
    console.log('User logged out. isAuthenticated:', this.isAuthenticatedUser);
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedUser;
  }
}