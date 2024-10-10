import { AfterViewChecked, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

declare const M:any;

@Component({
  selector: 'app-profile-ajouter',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    NavbarComponent
  ],
  templateUrl: './profile-ajouter.component.html',
  styleUrl: './profile-ajouter.component.scss'
})

export class ProfileAjouterComponent implements AfterViewChecked{

  private utilisateurSRV = inject(UtilisateurService);
  private router = inject(Router);

  profileDonnees:any = {};
  erreurs:any = {};

  @ViewChild('datepicker', {static: true}) tabsRef ?: ElementRef<HTMLInputElement>;

  ngAfterViewChecked(): void {
    //this.initializeMaterializeDatepicker();
  }

  enregistrerProfile() {
    this.utilisateurSRV.enregistrerProfile(this.profileDonnees).subscribe({
      next: (reponse) => {
        M.toast({html: reponse.msg, classes: 'green darken-4'});
        this.router.navigate(['/utilisateur/profile'])
      },
      error: (erreurs) => this.erreurs = erreurs.error
    })
  }

  private initializeMaterializeDatepicker() {
    setTimeout(() => {

      let dateInst = M.Datepicker.init(this.tabsRef?.nativeElement, {
        i18n: this.dateI18N(),
        yearRange: 100,
        maxYear: 2008,
        format: 'dd-mm-yyyy', 
        defaultDate: new Date(2008, 9, 4),
        setDefaultDate: true,
        onSelect: (date: Date) => {
          this.profileDonnees.dateDeNaissance = this.formatDate(date)
        },
        autoClose: true
      });
    }, 0)
  }

  private formatDate(date: Date): string {
    const day = ('0' + date.getDate()).slice(-2); 
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  }

  private dateI18N() {
    return {
      done: 'Valider',
      cancel: 'Annuler',
      months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
      monthsShort: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"],
      weekdays: ["Dimanche","Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
      weekdaysShort: ["Dim","Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
      weekdaysAbbrev: ["D","L", "M", "M", "J", "V", "S"]
    }
  }


}
