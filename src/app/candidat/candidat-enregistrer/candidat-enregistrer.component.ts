import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../../navbar/navbar.component";
import { UtilisateurService } from '../../services/utilisateur.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidat-enregistrer',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    NavbarComponent
],
  templateUrl: './candidat-enregistrer.component.html',
  styleUrl: './candidat-enregistrer.component.scss'
})

export class CandidatEnregistrerComponent {

  candidatDonnees:any = {};

  erreurs:any = {};
  succes: boolean = false;

  private utilisateurSRV = inject(UtilisateurService);

  enregistrerCandidat(){
    
    this.utilisateurSRV.enregistrerCandidat(this.candidatDonnees).subscribe({
      next: (reponse) => {

        this.erreurs = {}
        this.succes = true;
        console.log(reponse);

      },
      error: (erreurs) => {

        this.succes = false;
        this.erreurs = erreurs.error;
        console.log(erreurs)
        
      }
    })
  }


}
