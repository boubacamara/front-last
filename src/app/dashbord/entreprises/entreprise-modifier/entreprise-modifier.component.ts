import { AfterViewChecked, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { EntrepriseService } from '../../../services/entreprise.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

declare const M:any;

@Component({
  selector: 'app-entreprise-modifier',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    NavbarComponent
  ],
  templateUrl: './entreprise-modifier.component.html',
  styleUrl: './entreprise-modifier.component.scss'
})

export class EntrepriseModifierComponent implements OnInit, AfterViewChecked{

  private entrepriseSRV = inject(EntrepriseService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  entrepriseDonnees:any = {};
  erreurs:any = {};

  entreprise:any = {};

  ngOnInit(): void {

    let id = +this.activatedRoute.snapshot.params['id']

    this.entrepriseSRV.recuper(id).subscribe({
      next: (reponse) => this.entreprise = reponse,
      error: (erreurs) => console.error(erreurs)
    })
  }

  @ViewChild('adresseArea', {static: true}) adresseRef ?: ElementRef<HTMLTextAreaElement>;

  ngAfterViewChecked(): void {
    M.textareaAutoResize(this.adresseRef?.nativeElement);
  }

  modifierEntreprise(id:number) {
    this.entrepriseSRV.modifier(id, this.entrepriseDonnees).subscribe({
      next: (reponse) => this.router.navigate(['/utilisateur/profile']),
      error: (erreurs) => this.erreurs = erreurs.error
    })
  }
}
