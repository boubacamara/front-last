import { Component } from '@angular/core';
import { RechercherComponent } from '../rechercher/rechercher.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    RechercherComponent,
    NavbarComponent
],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

}
