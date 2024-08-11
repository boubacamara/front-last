import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../navbar/navbar.component';
import { RoleService } from '../../../services/role.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-role-ajouter',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    NavbarComponent
  ],
  templateUrl: './role-ajouter.component.html',
  styleUrl: './role-ajouter.component.scss'
})
export class RoleAjouterComponent {

  private roleSRV = inject(RoleService);

  roleDonnees:any = {};
  role:any = {};
  erreurs:any = {};

  enregistrerRole() {

    this.roleSRV.enregistrerRole(this.roleDonnees).subscribe({
      next: (response) => {
        this.erreurs = {}
        this.role = response
      },
      error: (erreurs) => {
        this.role = {};
        this.erreurs = erreurs.error;
        console.log(erreurs);
      }
    })
  }
}
