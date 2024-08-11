import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private url:string = 'http://localhost:8000/api/';
  private http = inject(HttpClient);

  getCategories() {
    return this.http.get<any[]>(this.url+'categorie/recuperers');
  }

  enregistrerCategorie(categorieDonnees:any) {
    return this.http.post<any>(this.url+'categorie/enregistrer', categorieDonnees);
  }
}
