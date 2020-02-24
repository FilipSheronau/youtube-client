import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';
import { Sort } from '../models/sort';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  public transform(values: SearchItem[], sortData: Sort): SearchItem[] {
    if (!values || sortData.data === '') { return values; }
    return values.sort((a, b) => {
      if (sortData.data === 'date') {
        let dateA: number = Date.parse(a.snippet.publishedAt);
        let dateB: number = Date.parse(b.snippet.publishedAt);
        if (sortData.arrow === 'down') { return dateA - dateB; }
        if (sortData.arrow === 'up') { return dateB - dateA; }
      }
      if (sortData.data === 'views') {
        let viewsA: number = Number(a.statistics.viewCount);
        let viewsB: number = Number(b.statistics.viewCount);
        if (sortData.arrow === 'down') { return viewsA - viewsB; }
        if (sortData.arrow === 'up') { return viewsB - viewsA; }
      }
    });
  }
}
