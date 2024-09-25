import { Component, inject } from '@angular/core';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { OffreService } from '../../../services/offre.service';

declare const M:any;

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  private utilisateurSRV = inject(UtilisateurService);
  private offreSRV = inject(OffreService);

  utilisateurs:any[] = [];
  utilisateur:any = {};
  offres:any[] = [];


  ngOnInit(): void {
    this.recuperUtilisateurs();
    this.recuperOffres()
  }

  ngAfterViewInit(): void {
    let modalElem = document.querySelectorAll('.modal');
    M.Modal.init(modalElem);
  }

  recupererId(id:number) {
    this.utilisateurSRV.recupererPourAdmin(id).subscribe({
      next: (reponse) => this.utilisateur = reponse,
      error: (erreurs) => console.log(erreurs)
    })
  }

  supprimerCompte(jeton:string, id:number) {
    this.utilisateurSRV.suppressionCompteParAdmin(jeton, id).subscribe({
      next: (reponse:any) => {
        M.toast({html: reponse.msg, classes: 'rounded green darken-4'}, 4000);
        window.location.reload()
      },
      error: (erreurs) => console.log(erreurs)
    })
  }

  private recuperUtilisateurs() {
    this.utilisateurSRV.recupererUtilisateurs().subscribe({
      next: (reponse) => this.utilisateurs = reponse,
      error: (erreurs) => console.log(erreurs)
    })
  }

  private recuperOffres() {
    this.offreSRV.recuperers().subscribe({
      next: (reponse) => {
        this.offres = reponse
        console.log(reponse)
      },
      error: (erreurs) => console.log(erreurs)
    })
  }
}
