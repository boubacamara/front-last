import { Component, inject } from '@angular/core';
import { RechercherComponent } from '../rechercher/rechercher.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    RechercherComponent,
    NavbarComponent
],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})

export class AccueilComponent {
  items:any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
}
