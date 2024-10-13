import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CommonModule, ViewportScroller } from '@angular/common';
import { OffreService } from '../../services/offre.service';
import { UtilisateurService } from '../../services/utilisateur.service';
import { RelativeTimePipe } from "../../pipes/relative-time.pipe";

declare const M:any;

@Component({
  selector: 'app-offre-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    RelativeTimePipe
],
  templateUrl: './offre-detail.component.html',
  styleUrl: './offre-detail.component.scss'
})

export class OffreDetailComponent implements OnInit{

  private viewportScroller = inject(ViewportScroller);
  offreSRV = inject(OffreService);
  router = inject(Router);
  activedRoute = inject(ActivatedRoute);
  utilisateurSRV = inject(UtilisateurService);

  offre:any = {};
  utilisateur:any = {};
  offreImage:any = {};
  entrepriseMedia:any = {};
  dejaPostuler:boolean = false;

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.recuperOffre();
    this.recupererUtilisateur();
  }

  private recupererUtilisateur(){
    const id = +this.activedRoute.snapshot.params['id'];
    this.utilisateurSRV.recuperer().subscribe({
      next: (res:any) => {
        this.utilisateur = res;
        let index = res.candidature.findIndex((offre:any) => offre.id === id);
        this.dejaPostuler = index!== -1? true: false;
      },
      error: () => console.log('Erreur interne du serveur')
    })
  }

  recuperOffre() {
    const id = +this.activedRoute.snapshot.params['id'];

    this.offreSRV.recupererParId(id).subscribe({
      next: (reponse:any) => {
        this.offre = reponse;
        this.entrepriseMedia = reponse.recruteur.entreprise.media;
        //this.offreImage = reponse.media.find((media:any) => media.type === 'offre')
      }
    })
  }

  postuler() {
    const id = +this.activedRoute.snapshot.params['id'];

    let curriculum = this.utilisateur.media.find((media:any) => media.type === 'cv');

    if(!curriculum) {
      M.toast({html: 'Veuillez chargé votre curriculum vitae', displayLength: 1500, classes: 'rounded teal darken-4'})
      this.router.navigateByUrl('/utilisateur/profile');
      return;
    }

    this.offreSRV.postuler(id).subscribe({
      next: (response:any) => {
        M.toast({html: response.msg, displayLength: 1000, classes: 'white teal-text text-darken-4'})
        this.router.navigateByUrl('/');
      },
      error: (erreurs) => console.log(erreurs)
    })
  }
}
