import { Component } from '@angular/core';
import { RechercherComponent } from '../rechercher/rechercher.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    RechercherComponent
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

}
