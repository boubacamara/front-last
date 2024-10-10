import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from "../../navbar/navbar.component";
import { UtilisateurService } from '../../services/utilisateur.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare const M:any;

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

  private readonly router = inject(Router);

  recruteurDonnees:any = {};

  erreurs:any = {};
  succes: boolean = false;

  private utilisateurSRV = inject(UtilisateurService);

  enregistrerRecruteur() {
    this.utilisateurSRV.enregistrerRecruteur(this.recruteurDonnees).subscribe({
      next: (reponse:any) => {
        M.toast({html: reponse.msg, displayLength: 1500, classses: 'rounded green darken-4'});
        this.router.navigateByUrl('/connexion')
      },
      error: (erreurs) => {

        this.succes = false;
        this.erreurs = erreurs.error;
        console.log(erreurs.error);

      }
    })
  }

}
