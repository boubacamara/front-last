import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UtilisateurService } from '../services/utilisateur.service';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

export const recruteurPermissionGuard: CanActivateFn = (route, state) => {
  const recruteur = inject(UtilisateurService);
  const router = inject(Router);

  return recruteur.recuperer().pipe(
    map((res:any) => {
      if(res?.role.intitule === 'recruteur'){
        return true
      }
      router.navigateByUrl('/');
      return false
    }),
    catchError(() => {
      router.navigateByUrl('/');
      return of(false)
    })
  )
};
