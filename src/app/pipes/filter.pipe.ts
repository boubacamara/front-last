import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args) return value;

    args=args.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    return value.filter(function(item:any) {
      return JSON.stringify(item).normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(args);
    })
  }

}
