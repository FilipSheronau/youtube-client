import { Component } from '@angular/core';
import { Sort } from './models/sort';
import { Filter } from './models/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isFilteringBlock: boolean = false;
  public searchData: string;
  public sortData: Sort = {data: '', arrow: ''};
  public wordFilterData: Filter = {value: '', isOn: false};

  public toggleSettings(): void {
    this.isFilteringBlock = !this.isFilteringBlock;
  }

  public search(event: string): void {
    this.searchData = event;
  }

  public sort(event: Sort): void {
    this.sortData = event;
  }

  public wordFilter(event: Filter): void {
    this.wordFilterData = event;
  }
}
