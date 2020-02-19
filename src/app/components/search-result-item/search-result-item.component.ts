import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent implements OnInit {
  @Input() public dataItem: SearchItem;

  constructor() {}

  public ngOnInit(): void {}

}
