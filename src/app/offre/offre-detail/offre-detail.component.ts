import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NavbarComponent } from "../../navbar/navbar.component";
import { ViewportScroller } from '@angular/common';
import { OffreService } from '../../services/offre.service';

@Component({
  selector: 'app-offre-detail',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent
],
  templateUrl: './offre-detail.component.html',
  styleUrl: './offre-detail.component.scss'
})

export class OffreDetailComponent implements OnInit{

  private viewportScroller = inject(ViewportScroller);
  offreSRV = inject(OffreService);
  router = inject(Router);
  activedRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0])
  }

  postuler() {
    const id = +this.activedRoute.snapshot.params['id'];
    this.offreSRV.postuler(id).subscribe({
      next: (response) => {
        let currentPage = this.router.url;
        console.log(response);
        this.router.navigateByUrl(currentPage)
      },
      error: (erreurs) => console.log(erreurs)
    })
  }

}
