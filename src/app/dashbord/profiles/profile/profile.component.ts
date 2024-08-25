import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

declare var M:any;

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})

export class ProfileComponent implements OnInit, AfterViewInit{

  private utilisateurSRV = inject(UtilisateurService);
  private router = inject(Router);

  utilisateur:any = {};

  ngOnInit(): void {
    this.utilisateurSRV.recuperer().subscribe({
      next: (reponse) => this.utilisateur = reponse,
      error: (erreurs) => console.log(erreurs)
    })
  }

  ngAfterViewInit(): void {
    let tabsElem = document.querySelectorAll('.tabs');
    M.Tabs.init(tabsElem);
  }
  supprimerCompte(jeton:string) {
    this.utilisateurSRV.supprimerMonCompte(jeton).subscribe({
      next: (reponse) => {
        this.utilisateurSRV.creerJeton('');
        this.router.navigate([""]);
      },
      error: (erreurs) => console.log(erreurs)
    })
  }
}
