import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public toggleSettings: EventEmitter<void> = new EventEmitter();
  @Output() public searchData: EventEmitter<string> = new EventEmitter();
  public searchValue: string = '';
  public searchPlaceHolderStr: string = 'What are you want to find out?';
  public searchPlaceHolder: string = this.searchPlaceHolderStr;

  constructor() { }

  public ngOnInit(): void {}

  public onToggleSettings(event: Event): void {
    event.preventDefault();
    this.toggleSettings.emit();
  }

  public onSearch(event: Event, data: string): void {
    event.preventDefault();
    this.searchData.emit(data);
  }
}
