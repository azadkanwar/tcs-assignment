import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortName'
})
export class SortNamePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(result => {
      return result.name.first.toLowerCase().includes(searchText) || result.name.last.toLowerCase().includes(searchText);
    });
  }
}
