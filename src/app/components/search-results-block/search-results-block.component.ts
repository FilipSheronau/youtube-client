import { Component, OnInit, Input } from '@angular/core';
import { youTubeResponse } from '../../mock-response';
import { SearchItem } from 'src/app/models/search-item.model';
import { Sort } from 'src/app/models/sort';
import { Filter } from 'src/app/models/filter';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss']
})
export class SearchResultsBlockComponent implements OnInit {
  @Input() public searchData: string;
  @Input() public sortData: Sort;
  @Input() public wordFilterData: Filter;

  public items: SearchItem[] = youTubeResponse.items;

  constructor() {}

  public ngOnInit(): void {}
}
