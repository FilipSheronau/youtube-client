import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';
import { Filter } from '../models/filter';

@Pipe({
  name: 'wordFilter',
  pure: false
})
export class WordFilterPipe implements PipeTransform {

  public transform(values: SearchItem[], par: Filter): SearchItem[] {
    if (!values || !par.value || !par.isOn) { return values; }
    return values.filter((value) => {
      const title: string[] = value.snippet.title.match(/[а-яa-z0-9-]+/gi);
      const valueWord: string[] = par.value.match(/[а-яa-z0-9-]+/gi);
      if (!title || !valueWord) { return false; }
      let result: boolean = false;
      outerloop:
      for (let i: number = 0; i < title.length; i += 1) {
        for (let j: number = 0; j < valueWord.length; j += 1) {
          if (valueWord[j].toLowerCase().includes(title[i].toLowerCase())) {
            result = true;
            break outerloop;
          }
        }
      }
      return result;
    });
  }
}
