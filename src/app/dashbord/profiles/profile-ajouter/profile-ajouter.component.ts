import { AfterViewInit, Component, inject } from '@angular/core';
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

export class ProfileAjouterComponent implements AfterViewInit{

  private utilisateurSRV = inject(UtilisateurService);
  private router = inject(Router);

  profileDonnees:any = {};
  erreurs:any = {};

  ngAfterViewInit(): void {
    //this.initializeMaterializeDatepicker();
  }

  enregistrerProfile() {

    this.utilisateurSRV.enregistrerProfile(this.profileDonnees).subscribe({
      next: (reponse) => this.router.navigate(['/utilisateur/profile']),
      error: (erreurs) => this.erreurs = erreurs.error
    })
  }

  private initializeMaterializeDatepicker() {
    setTimeout(() => {

      let dateElems = document.querySelectorAll('.datepicker');
      let dateInst = M.Datepicker.init(dateElems, {
        format: 'yyyy-mm-dd', 
        defaultDate: new Date(2024, 8, 2),
        setDefaultDate: true,
        onSelect: (date: Date) => {
          this.profileDonnees.dateDeNaissance = this.formatDate(date)
        }
      });
    }, 0)
  }

  formatDate(date: Date): string {
    const day = ('0' + date.getDate()).slice(-2); 
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
}
