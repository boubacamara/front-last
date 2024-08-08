import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private url:string = 'http://localhost:8000/api/';

  private http = inject(HttpClient);

  enregistrerCandidat(candidatDonnees:any){
    return this.http.post<string>(this.url+'candidat/enregistrer', candidatDonnees);
  }

  enregistrerRecruteur(recruteurDonnees:any){
    return this.http.post<string>(this.url+'recruteur/enregistrer', recruteurDonnees);
  }
}
