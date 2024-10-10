import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-afficher-curriculum',
  standalone: true,
  imports: [
    NavbarComponent,
    PdfViewerModule
  ],
  templateUrl: './afficher-curriculum.component.html',
  styleUrl: './afficher-curriculum.component.scss'
})

export class AfficherCurriculumComponent implements OnInit{

  private utilisateurSRV = inject(UtilisateurService);
  private readonly activatedRoute = inject(ActivatedRoute);

  candidatMedia:any = {};

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    this.utilisateurSRV.recupererPourAdmin(id).subscribe({
      next: (res) => {
        this.candidatMedia = res?.media?.find((media:any) => media.type === 'cv')
      }
    })
  }
}
