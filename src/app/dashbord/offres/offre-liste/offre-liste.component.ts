import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../navbar/navbar.component';
import { OffreService } from '../../../services/offre.service';
import { Router, RouterModule } from '@angular/router';

declare const M:any;

@Component({
  selector: 'app-offre-liste',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    NavbarComponent
  ],
  templateUrl: './offre-liste.component.html',
  styleUrl: './offre-liste.component.scss'
})

export class OffreListeComponent implements OnInit, AfterViewInit{

  private offreSRV = inject(OffreService);
  private router = inject(Router);

  typeContrat:string[] = ['cdi', 'cdd', 'intérim', 'stage', 'alternance', 'freelance'];

  offreDonnees:any = {}
  offres:any[] = [];
  offre:any = {};
  erreurs:any = {};
  contratVerif:boolean = true;

  ngOnInit(): void {
    
    this.offreSRV.recuperersParRecruteur().subscribe({
      next: (reponse) => this.offres = reponse,
      error: (erreurs) => console.log(erreurs)
    })
  }

  @ViewChild('selectForm', {static: true}) selectRef?: ElementRef<HTMLSelectElement>
  @ViewChild('modal', {static: true}) modalRef?: ElementRef<HTMLDivElement>

  ngAfterViewInit(): void {

    let modalInst = M.Modal.init(this.modalRef?.nativeElement);
    this.initializeMaterializeSelect();
  }

  recuperId(id:number) {

    this.offreSRV.recupererParId(id).subscribe({
      next: (reponse) => {
        this.offre = reponse
        this.initializeMaterializeSelect();
      },
      error: (erreurs) => console.log(erreurs)
    })
  }

  modifierOffre(id:number) {

    this.offreSRV.modifierOffre(id, this.offreDonnees).subscribe({
      next: (reponse) => {
        this.offre = reponse;
        setInterval(() => window.location.reload(), 1200)
      },
      error: (erreurs) => this.erreurs = erreurs.error
    });

  }


  supprimerOffre(id:number) {
    this.offreSRV.supprimer(id).subscribe({
      next: (reponse) => {
        this.offre = reponse;
        setInterval(() => window.location.reload(), 1200);
      },
      error: (erreurs) => console.log(erreurs)
    })
  }

  exclureContratActuel(contratActuel:string) {
    return this.typeContrat.filter(contrat => contrat != contratActuel);
  }

  private initializeMaterializeSelect() {
    setTimeout(() => {
      M.FormSelect.init(this.selectRef?.nativeElement)
    }, 0);
  }

}
