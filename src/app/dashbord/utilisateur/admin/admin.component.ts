import { Component, inject } from '@angular/core';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

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
  private router = inject(Router)

  utilisateurs:any[] = [];
  utilisateur:any = {};

  ngOnInit(): void {
    this.utilisateurSRV.recupererUtilisateurs().subscribe({
      next: (reponse) => this.utilisateurs = reponse,
      error: (erreurs) => console.log(erreurs)
    })
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
      next: (reponse) => {
        window.location.reload();
      },
      error: (erreurs) => console.log(erreurs)
    })
  }
}
