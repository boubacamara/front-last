import { Component, inject, OnInit } from '@angular/core';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-modifier',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    NavbarComponent,
    RouterModule
  ],
  templateUrl: './profile-modifier.component.html',
  styleUrl: './profile-modifier.component.scss'
})
export class ProfileModifierComponent implements OnInit{

  private utilisateurSRV = inject(UtilisateurService);
  private router = inject(Router);

  profileDonnees:any = {};
  utilisateur:any = {};
  erreurs:any = {};

  ngOnInit(): void {
    this.utilisateurSRV.recuperer().subscribe({
      next: (reponse) => this.utilisateur = reponse,
      error: (erreurs) => console.log(erreurs)
    });
  }


  modifierProfile() {
    this.utilisateurSRV.modifierProfile(this.profileDonnees).subscribe({
      next: () => this.router.navigate(['/utilisateur/profile']),
      error: (erreurs) => this.erreurs = erreurs.error
    })
  }

}
