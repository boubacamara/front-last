import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../navbar/navbar.component';
import { Router, RouterModule } from '@angular/router';
import { CategorieService } from '../../../services/categorie.service';
import { OffreService } from '../../../services/offre.service';

declare var M:any;

@Component({
  selector: 'app-offre-ajouter',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    NavbarComponent
  ],
  templateUrl: './offre-ajouter.component.html',
  styleUrl: './offre-ajouter.component.scss'
})

export class OffreAjouterComponent implements OnInit, AfterViewInit{

  private categorie = inject(CategorieService);
  offreSRV = inject(OffreService);
  router = inject(Router);

  typeContrat:string[] = ['cdi', 'cdd', 'intérim', 'stage', 'alternance', 'freelance'];
  posteListe:any[] = [];
  offreDonnees:any = {};
  erreurs:any = {}

  ngOnInit(): void {
    
    this.categorie.getCategories().subscribe({
      next: (reponse:any) => {
        this.posteListe = reponse;
        this.initializeMaterializeSelect();
      },
      error: (erreurs) => console.log(erreurs)
    })
  }

  ngAfterViewInit(): void {
    
    this.initializeMaterializeSelect()
  }

  enregistrerOffre() {

    this.offreSRV.enregistrerOffre(this.offreDonnees).subscribe({
      next: (reponse) => this.router.navigate(["/utilisateur/offres"]),
      error: (erreurs) => this.erreurs = erreurs.error
    })
  }

  private initializeMaterializeSelect() {
    setTimeout(() => {
      let fomrSelectElem = document.querySelectorAll('select');
      M.FormSelect.init(fomrSelectElem)
    }, 0);
  }

}
