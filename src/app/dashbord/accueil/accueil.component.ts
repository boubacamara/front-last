import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CategorieService } from '../../services/categorie.service';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent implements OnInit{

  categorieSRV = inject(CategorieService);

  ngOnInit(): void {
    this.categorieSRV.getCategories().subscribe({
      next: (reponse) => console.log(reponse),
      error: (erreurs) => console.log(erreurs)
    })
  }
}
