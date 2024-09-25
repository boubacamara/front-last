import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UtilisateurService } from '../services/utilisateur.service';

export const authGuard: CanActivateFn = (route, state) => {
  const utilisateur = inject(UtilisateurService);
  const router = inject(Router)

  if(utilisateur.estConnecte()) {
    return true;
  }
  router.navigateByUrl('/connexion')
  return false;
};
