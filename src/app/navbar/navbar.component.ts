import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UtilisateurService } from '../services/utilisateur.service';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  utilisateurSRV = inject(UtilisateurService);
  utilisateur:any = {};
  router = inject(Router);
  location = inject(Location)

  ngOnInit(): void {
    this.recuperUtilisateur()
  }

  permissionRecruteurOuAdmin(utilisateur:any) {
    return utilisateur.role?.intitule === 'admin' || utilisateur.role?.intitule === 'recruteur'
  }

  deconnexion() {
    this.utilisateurSRV.supprimerLeToken();
    this.location.replaceState(this.location.path())
  }

  private recuperUtilisateur() {
    this.utilisateurSRV.recuperer().subscribe({
      next: (reponse) => this.utilisateur = reponse,
      error: erreurs => console.log(erreurs)
    })
  }
}
