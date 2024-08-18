import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-ajouter',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    NavbarComponent
  ],
  templateUrl: './profile-ajouter.component.html',
  styleUrl: './profile-ajouter.component.scss'
})

export class ProfileAjouterComponent {

  private utilisateurSRV = inject(UtilisateurService);
  private router = inject(Router);

  profileDonnees:any = {};
  erreurs:any = {};

  enregistrerProfile() {
    
    this.utilisateurSRV.enregistrerProfile(this.profileDonnees).subscribe({
      next: (reponse) => this.router.navigate(['/utilisateur/profile']),
      error: (erreurs) => this.erreurs = erreurs.error
    })
  }
}
