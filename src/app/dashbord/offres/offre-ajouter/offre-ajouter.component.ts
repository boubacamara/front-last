import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CategorieService } from '../../../services/categorie.service';

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

  typeContrat:string[] = ['cdi', 'cdd', 'intérim', 'stage', 'alternance', 'freelance'];
  posteListe:any[] = [];
  offreDonnees:any = {};

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
    console.log(this.offreDonnees)
    this.initializeMaterializeSelect()
  }

  private initializeMaterializeSelect() {
    setTimeout(() => {
      let fomrSelectElem = document.querySelectorAll('select');
      M.FormSelect.init(fomrSelectElem)
    }, 0);
  }

}
