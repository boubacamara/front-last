import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CategorieService } from '../../services/categorie.service';
import { RecruteurComponent } from "../utilisateur/recruteur/recruteur.component";
import { CandidatComponent } from "../utilisateur/candidat/candidat.component";
import { UtilisateurService } from '../../services/utilisateur.service';
import { OffreService } from '../../services/offre.service';
import { AdminComponent } from "../utilisateur/admin/admin.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    RecruteurComponent,
    CandidatComponent,
    AdminComponent
],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent implements OnInit{

  offreSRV = inject(OffreService);
  utilisateurSRV = inject(UtilisateurService);
  categorieSRV = inject(CategorieService);
  utilisateur:any = {}

  ngOnInit(): void {
    this.recuperUtilisateur()
  }

  recuperUtilisateur(){
    this.utilisateurSRV.recuperer().subscribe({
      next: (reponse) => this.utilisateur = reponse,
      error: (erreurs) => console.log(erreurs)
    })
  }
}
