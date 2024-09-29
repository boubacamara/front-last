import { AfterViewChecked, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { EntrepriseService } from '../../../services/entreprise.service';
import { MediaService } from '../../../services/media.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';

declare var M:any;

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    PdfViewerModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})

export class ProfileComponent implements OnInit, AfterViewChecked{

  private utilisateurSRV = inject(UtilisateurService);
  private entrepriseSRV = inject(EntrepriseService);
  private router = inject(Router);
  private media = inject(MediaService)

  utilisateur:any = {};
  avatar:any = {};
  curriculum:any = {};

  ngOnInit(): void {
    
    this.utilisateurSRV.recuperer().subscribe({
      next: (reponse) => {
        this.utilisateur = reponse;
        let curriculum = reponse?.media?.find((media:any) => media.type === 'cv');
        let avatar = reponse?.media?.find((media:any) => media.type === 'avatar');
        this.curriculum = curriculum;
        this.avatar = avatar;
        console.log(curriculum)
      },
      error: (erreurs) => console.log(erreurs)
    })

  }

  @ViewChild('tabs', {static: true}) tabsRef ?: ElementRef<HTMLUListElement>;

  ngAfterViewChecked(): void {
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

  verifieAvatar(media:any) {
    return media.find((media:any) => media?.type === 'avatar')
  }

  verifieCurriculum(media:any) {
    return media.find((media:any) => media?.type === 'cv')
  }

  chargerCv(event:any) {
    let cv = event.target?.files[0];
    let file = new FormData();
    file.set('file', cv);

    this.media.chargerCv(file).subscribe({
      next: (rep) => {
        M.toast({html: rep.msg, classes: 'rounded green'});
        this.router.navigateByUrl('dashbord')
      },
      error: (erreur) => M.toast({html: erreur.error.msg, classes: 'rounded red'})
    })
    
  }

  chargerAvatar(event:any) {
    let avatar = event.target?.files[0];
    let file = new FormData();
    file.set('file', avatar);

    this.media.chargerAvatar(file).subscribe({
      next: (rep) => {
        M.toast({html: rep.msg, classes: 'rounded green'});
        this.router.navigateByUrl('dashbord')
      },
      error: (erreur) => M.toast({html: erreur.error.msg, classes: 'rounded red'})
    })
    
  }

  private initializeMarializeTabs() {
    M.Tabs.init(this.tabsRef?.nativeElement);
  }
}
