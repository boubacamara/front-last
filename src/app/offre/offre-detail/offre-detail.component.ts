import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../../navbar/navbar.component";
import { ViewportScroller } from '@angular/common';

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

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0])
  }

}
