import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth';

export const authGuard: CanActivateFn = (route, state): boolean | UrlTree => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true; // User is logged in, grant access
  }

  // User is NOT logged in, redirect to the login page
  alert('You must be logged in to access the Admin area.');
  return router.createUrlTree(['/auth/login']);
};