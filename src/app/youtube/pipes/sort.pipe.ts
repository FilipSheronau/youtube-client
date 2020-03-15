import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  public transform(values: SearchItem[], orderBy: string, arrow: string): SearchItem[] {
    if (!values || orderBy === '') { return values; }
    return values.sort((a, b) => {
      if (orderBy === 'date') {
        let dateA: number = Date.parse(a.snippet.publishedAt);
        let dateB: number = Date.parse(b.snippet.publishedAt);
        if (arrow === 'down') { return dateA - dateB; }
        if (arrow === 'up') { return dateB - dateA; }
      }
      if (orderBy === 'views') {
        let viewsA: number = Number(a.statistics.viewCount);
        let viewsB: number = Number(b.statistics.viewCount);
        if (arrow === 'down') { return viewsA - viewsB; }
        if (arrow === 'up') { return viewsB - viewsA; }
      }
    });
  }
}
