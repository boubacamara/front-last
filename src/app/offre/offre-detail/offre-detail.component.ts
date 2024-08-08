import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
  selector: 'app-offre-detail',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent
],
  templateUrl: './offre-detail.component.html',
  styleUrl: './offre-detail.component.scss'
})
export class OffreDetailComponent {

}
