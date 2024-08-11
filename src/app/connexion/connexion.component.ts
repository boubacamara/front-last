import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { Router, RouterModule } from '@angular/router';
import { UtilisateurService } from '../services/utilisateur.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    NavbarComponent
  ],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent {

  private utilisateur = inject(UtilisateurService);
  private __router = inject(Router);
  utilisateurDonnees:any = {};

  erreurs:any = {};

  connexion() {
    return this.utilisateur.connexion(this.utilisateurDonnees).subscribe({
      next: (reponse) => {

        this.utilisateur.creerJeton(reponse.token);
        console.log(reponse.token);
        this.__router.navigate(['/dashbord'])

      },
      error: (erreurs) => {
        this.erreurs = erreurs.error;
        console.log(erreurs)
      }
    })
  }
}
