import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { youTubeResponse } from 'src/app/mock-response';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public toggleSettings: EventEmitter<void> = new EventEmitter();
  @Output() public searchData: EventEmitter<SearchItem[]> = new EventEmitter();
  public searchValue: string = '';
  public searchPlaceHolderStr: string = 'What are you want to find out?';
  public searchPlaceHolder: string = this.searchPlaceHolderStr;
  public items: SearchItem[] = youTubeResponse.items;

  constructor() { }

  private getItems(str: string): SearchItem[]  {
    if (!this.items) { return []; }
    if (!this.searchValue) { return this.items; }
    return this.items.filter((value) => {
      if (value.snippet.title) {
        return value.snippet.title.toLowerCase().includes(this.searchValue.toLowerCase());
      }
    });
  }

  public ngOnInit(): void {}

  public onToggleSettings(event: Event): void {
    event.preventDefault();
    this.toggleSettings.emit();
  }

  public onSearch(event: Event): void {
    event.preventDefault();
    this.searchData.emit(this.getItems(this.searchValue));
  }
}
