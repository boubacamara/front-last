import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CategorieService } from '../../../services/categorie.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

declare var M:any;

@Component({
  selector: 'app-categorie',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    NavbarComponent
  ],
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.scss'
})
export class CategorieComponent implements OnInit, AfterViewInit {

  private categorieSRV = inject(CategorieService);
  private router = inject(Router);

  categorieDonnees:any = {};
  categorie:any = {};
  categories:any[] = [];
  erreurs:any = {};

  ngOnInit(): void {
    this.categorieSRV.getCategories().subscribe({
      next: (reponse) => this.categories = reponse,
      error: (erreurs) => console.log(erreurs)
    })
  }

  ngAfterViewInit(): void {
    let modalElem = document.querySelectorAll('.modal');
    M.Modal.init(modalElem);
  }

  supprimerCategorie(id:number) {
    this.categorieSRV.supprimer(id).subscribe({
      next: (reponse) => {
        this.categorie = reponse;
        setInterval(() => {
          window.location.reload()
        }, 1200);
      },
      error: (erreurs) => console.log(erreurs)
    })
  }

  recuperCategorie(id:number) {
    this.categorieSRV.recuperer(id).subscribe({
      next: (reponse) => this.categorie = reponse,
      error: (erreurs) => console.log(erreurs)
    })
  }

  modifierCategorie(id:number) {
    this.categorieSRV.modifier(id, this.categorieDonnees).subscribe({
      next: (reponse) => {
        this.categorie = reponse;
        setInterval(() => {
          window.location.reload()
        }, 1200);
      },
      error: (erreurs) => console.log(erreurs)
    })
  }
}
