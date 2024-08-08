import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-choix-creation-compte',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent
  ],
  templateUrl: './choix-creation-compte.component.html',
  styleUrl: './choix-creation-compte.component.scss'
})
export class ChoixCreationCompteComponent {

}
