import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  // Default redirect to a public path
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  // Public Feature Routes (Lazy Loaded)
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },

  // Protected Feature Routes (Lazy Loaded AND Guarded)
  {
    path: 'admin',
    // canActivate: [authGuard], // Guard applied to all child routes in this feature
    loadChildren: () => import('./features/admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  },

  // Catch-all 404 Route (Must be the last route)
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
  },
];