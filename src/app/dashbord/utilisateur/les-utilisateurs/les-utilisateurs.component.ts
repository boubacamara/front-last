import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { Router, RouterModule } from '@angular/router';

declare var M:any;

@Component({
  selector: 'app-les-utilisateurs',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    CommonModule
  ],
  templateUrl: './les-utilisateurs.component.html',
  styleUrl: './les-utilisateurs.component.scss'
})
export class LesUtilisateursComponent implements OnInit, AfterViewInit{

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
