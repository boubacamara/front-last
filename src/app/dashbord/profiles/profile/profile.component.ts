import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})

export class ProfileComponent implements OnInit{

  private utilisateurSRV = inject(UtilisateurService);

  utilisateur:any = {};

  ngOnInit(): void {
    this.utilisateurSRV.recuperer().subscribe({
      next: (reponse) => this.utilisateur = reponse,
      error: (erreurs) => console.log(erreurs)
    })
  }
}
