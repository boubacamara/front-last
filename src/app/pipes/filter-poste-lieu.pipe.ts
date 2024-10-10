import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPosteLieu',
  standalone: true
})
export class FilterPosteLieuPipe implements PipeTransform {

  transform(items:any[], poste:string, lieu:string) {
    if (!items) return [];

    if (!poste && !lieu) return items;

    poste = poste ? poste.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase() : '';
    lieu = lieu ? lieu.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase() : '';

    return items.filter((item: any) => {
      const normalizedPoste = item.titre ? item.titre.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase() : '';
      const normalizedLieu = item.lieu ? item.lieu.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase() : '';

    
      const matchesPoste = poste ? normalizedPoste.includes(poste) : true;
      const matchesLieu = lieu ? normalizedLieu.includes(lieu) : true;

      return matchesPoste && matchesLieu;
    })
  }

}
