import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { EntrepriseService } from '../../../services/entreprise.service';

@Component({
  selector: 'app-entreprise-ajouter',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    NavbarComponent
  ],
  templateUrl: './entreprise-ajouter.component.html',
  styleUrl: './entreprise-ajouter.component.scss'
})

export class EntrepriseAjouterComponent {

  private entrepriseSRV = inject(EntrepriseService);
  private router = inject(Router);

  entrepriseDonnees:any = {};
  erreurs:any = {};

  enregistrerEntreprise() {
    this.entrepriseSRV.enregistrerEntreprise(this.entrepriseDonnees).subscribe({
      next: (reponse) => this.router.navigate(["/utilisateur/profile"]),
      error:(erreurs) => this.erreurs = erreurs.error
    })
  }
}
