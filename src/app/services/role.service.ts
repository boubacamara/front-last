import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private http = inject(HttpClient);

  private url:string = 'http://localhost:8000/api/';

  getRoles() {
    return this.http.get<any[]>(this.url+'role/recuperers');
  }

  enregistrerRole(roleDonnees: any) {
    return this.http.post<any>(this.url+'role/enregistrer', roleDonnees)
  }

}
