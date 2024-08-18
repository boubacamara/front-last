import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { RouterModule } from '@angular/router';

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
export class LesUtilisateursComponent implements OnInit{

  private utilisateurSRV = inject(UtilisateurService);

  utilisateurs:any[] = [];
  utilisateur:any = {};

  ngOnInit(): void {
    
    this.utilisateurSRV.recupererUtilisateurs().subscribe({
      next: (reponse) => this.utilisateurs = reponse,
      error: (erreurs) => console.log(erreurs)
    })
  }

  recupererId(id:number) {
    this.utilisateurSRV.recupererPourAdmin(id).subscribe({
      next: (reponse) => this.utilisateur = reponse,
      error: (erreurs) => console.log(erreurs)
    })
  }
}
