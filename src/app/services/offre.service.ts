import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  private http = inject(HttpClient)

  private uri:string =  'http://localhost:8000/api/';

  enregistrerOffre(offreDonnees:any) {
    return this.http.post<any>(this.uri+'offre/enregistrer', offreDonnees)
  }

  recupererParId(id:number) {
    return this.http.get<any>(this.uri+`offre/${id}/recuperer`);
  }

  recuperersParRecruteur() {
    return this.http.get<any>(this.uri+'offre/recruteur/recuperers');
  }

  modifierOffre(id:number, offreDonnees:any) {
    return this.http.put<any>(this.uri+`offre/${id}/modifier`, offreDonnees)
  }

  supprimer(id:number) {
    return this.http.delete<any>(this.uri+`offre/${id}/supprimer`);
  }
}
