import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CategorieService } from '../../../services/categorie.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categorie',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    NavbarComponent
  ],
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.scss'
})
export class CategorieComponent implements OnInit {

  private categorie = inject(CategorieService);
  categories:any[] = [];

  ngOnInit(): void {
    this.categorie.getCategories().subscribe({
      next: (reponse) => this.categories = reponse,
      error: (erreurs) => console.log(erreurs)
    })
  }
}
