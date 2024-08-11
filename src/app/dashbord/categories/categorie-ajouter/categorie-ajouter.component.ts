import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategorieService } from '../../../services/categorie.service';

@Component({
  selector: 'app-categorie-ajouter',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    NavbarComponent
  ],
  templateUrl: './categorie-ajouter.component.html',
  styleUrl: './categorie-ajouter.component.scss'
})
export class CategorieAjouterComponent {

  private categorieSRV = inject(CategorieService);

  categotrieDonnees:any = {};
  categotrie:any = {};
  erreurs:any = {};

  enregistrerCategorie() {
    this.categorieSRV.enregistrerCategorie(this.categotrieDonnees).subscribe({
      next: (reponse) => {

        this.erreurs = {};
        this.categotrie = reponse;
  
      },
      error: (erreurs) => {
        this.categotrie = {};
        this.erreurs = erreurs.error;
        console.log(erreurs);
      }
    })
  }
}
