import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform(items: any[], keyword: string): any {
  if(items.length == 0){
    return items;
  }
    if (Array.isArray(items) && typeof keyword == 'string') {
      return items.filter(c => {
        return Object.keys(c).some(key => {
          if (typeof c[key] == 'string') {
            return c[key].toLowerCase().includes(keyword.toLowerCase());
          }
          return false;
        })
      })
    }
    return items;
  }

}
