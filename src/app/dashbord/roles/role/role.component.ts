import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RoleService } from '../../../services/role.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    CommonModule
  ],
  templateUrl: './role.component.html',
  styleUrl: './role.component.scss'
})
export class RoleComponent implements OnInit{

  private role = inject(RoleService);
  roles:any[] = [];

  ngOnInit(): void {
    this.role.getRoles().subscribe({
      next: (reponse) => this.roles = reponse,
      error: (erreurs) => console.log(erreurs)
    })
  }
}
