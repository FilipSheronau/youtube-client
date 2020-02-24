import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { Sort } from 'src/app/youtube/models/sort';
import { Filter } from 'src/app/youtube/models/filter';
// import { youTubeResponse } from 'src/app/mock-response';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss']
})
export class SearchResultsBlockComponent implements OnInit {
  @Input() public searchData: SearchItem[];
  @Input() public sortData: Sort;
  @Input() public wordFilterData: Filter;

  // public items: SearchItem[] = youTubeResponse.items;

  constructor() {}

  public ngOnInit(): void {}
}
