import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  
  private uri:string = 'http://localhost:8000/api/';
  private http = inject(HttpClient);

  chargerCv(file:any) {
    return this.http.post<any>(this.uri+`utilisateur/charger/cv`, file);
  }

  chargerAvatar(file:any) {
    return this.http.post<any>(this.uri+`utilisateur/charger/avatar`, file);
  }

  chargerEntrepriseImage(id:number, file:any) {
    return this.http.post<any>(this.uri+`utilisateur/charger/entreprise/${id}`, file);
  }
}
