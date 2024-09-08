import { AfterContentChecked, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { EntrepriseService } from '../../../services/entreprise.service';

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

export class ProfileComponent implements OnInit, AfterContentChecked{

  private utilisateurSRV = inject(UtilisateurService);
  private entrepriseSRV = inject(EntrepriseService);
  private router = inject(Router);

  utilisateur:any = {};

  ngOnInit(): void {
    
    this.utilisateurSRV.recuperer().subscribe({
      next: (reponse) => this.utilisateur = reponse,
      error: (erreurs) => console.log(erreurs)
    })

  }

  @ViewChild('tabs', {static: true}) tabsRef ?: ElementRef<HTMLUListElement>;

  ngAfterContentChecked(): void {
    this.initializeMarializeTabs()
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

  supprimerEntreprise(id:number) {
    this.entrepriseSRV.supprimer(id).subscribe({
      next: (reponse) => {
        setInterval(() => window.location.reload(), 500);
      },
      error: (erreurs) => console.log(erreurs)
    })
  }

  private initializeMarializeTabs() {
    M.Tabs.init(this.tabsRef?.nativeElement);
  }
}
