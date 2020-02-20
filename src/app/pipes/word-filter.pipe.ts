import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';
import { Filter } from '../models/filter';

@Pipe({
  name: 'wordFilter'
})
export class WordFilterPipe implements PipeTransform {

  public transform(values: SearchItem[], par: Filter): SearchItem[] {
    if (!values || !par.value || !par.isOn) { return values; }
    if (values.length > 1) {
      return values.filter((value) => {
        let result: boolean = false;
        if (value.snippet.tags) {
          for (let i: number = 0; i < value.snippet.tags.length; i += 1) {
            if (par.value.toLowerCase().includes(value.snippet.tags[i].toLowerCase())) {
              result = true;
              break;
            }
          }
        }
        return result;
      });
    }
  }
}
