import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../../navbar/navbar.component";
import { UtilisateurService } from '../../services/utilisateur.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recruteur-enregistrer',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    NavbarComponent
  ],
  templateUrl: './recruteur-enregistrer.component.html',
  styleUrl: './recruteur-enregistrer.component.scss'
})
export class RecruteurEnregistrerComponent {

  recruteurDonnees:any = {};

  erreurs:any = {};
  succes: boolean = false;

  private utilisateurSRV = inject(UtilisateurService);

  enregistrerRecruteur() {
    this.utilisateurSRV.enregistrerRecruteur(this.recruteurDonnees).subscribe({
      next: (reponse) => {

        this.erreurs = {}
        this.succes = true;
        console.log(reponse);

      },
      error: (erreurs) => {

        this.succes = false;
        this.erreurs = erreurs.error;
        console.log(erreurs.error);

      }
    })
  }

}
