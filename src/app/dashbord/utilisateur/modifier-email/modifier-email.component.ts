import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modifier-email',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    NavbarComponent
  ],
  templateUrl: './modifier-email.component.html',
  styleUrl: './modifier-email.component.scss'
})
export class ModifierEmailComponent implements OnInit{

  private utilisateurSRV = inject(UtilisateurService);
  private router = inject(Router);

  utilisateur:any = {};
  utilisateurEmail:any = {};
  erreurs:any = {};

  ngOnInit(): void {
    this.utilisateurSRV.recuperer().subscribe({
      next: (reponse) => this.utilisateur = reponse,
      error: (erreurs) => this.erreurs = erreurs
    })
  }

  modifierEmail(jeton:string) {
    this.utilisateurSRV.modifierEmail(jeton, this.utilisateurEmail).subscribe({
      next: (reponse) => this.router.navigate(['/utilisateur/profile']),
      error: (erreurs)=> this.erreurs = erreurs.error
    })
  }
}
