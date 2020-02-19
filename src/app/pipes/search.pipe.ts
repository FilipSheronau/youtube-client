import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  public transform(values: SearchItem[], searchVal: string): SearchItem[] {
    if (searchVal === undefined) { return; }
    return values.filter((value) => {
      let searchValSmall: string = searchVal;
      if (searchVal) { searchValSmall = searchVal.toLowerCase(); }
      if (value.snippet.title) {
        return value.snippet.title.toLowerCase().includes(searchValSmall);
      }
    });
  }
}
