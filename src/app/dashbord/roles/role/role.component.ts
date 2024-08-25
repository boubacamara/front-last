import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RoleService } from '../../../services/role.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    NavbarComponent,
    CommonModule
  ],
  templateUrl: './role.component.html',
  styleUrl: './role.component.scss'
})
export class RoleComponent implements OnInit, AfterViewInit{

  private roleSRV = inject(RoleService);
  private router = inject(Router);

  roleDonnees:any = {};
  roles:any[] = [];
  role:any = {};
  erreurs:any = {};

  ngOnInit(): void {
    this.roleSRV.getRoles().subscribe({
      next: (reponse) => this.roles = reponse,
      error: (erreurs) => console.log(erreurs)
    })
  }

  ngAfterViewInit(): void {
    let modalElem = document.querySelectorAll('.modal');
    M.Modal.init(modalElem)
  }

  supprimerRole(id:number) {
    this.roleSRV.supprimer(id).subscribe({
      next: (reponse) => {
        this.role = reponse;
        setInterval(() => {
          window.location.reload()
        }, 1200);
      },
      error: (erreurs) => console.log(erreurs)
    })
  }

  recuperRole(id:number) {
    this.roleSRV.recuperer(id).subscribe({
      next: (reponse) => this.role = reponse,
      error: (erreurs) => console.log(erreurs)
    })
  }

  modifierRole(id:number) {
    this.roleSRV.modifier(id, this.roleDonnees).subscribe({
      next: (reponse) => {
        this.role = reponse;
        setInterval(() => {
          window.location.reload()
        }, 1500);
      },
      error: (erreurs) => console.log(erreurs)
    })
  }
}
