import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public searchValue: string = '';
  public searchPlaceHolderStr: string = 'What are you want to find out?';
  public searchPlaceHolder: string = this.searchPlaceHolderStr;

  constructor(public coreService: CoreService) {  }

  public ngOnInit(): void {}

  public toggleSettings(event: Event): void {
    event.preventDefault();
    this.coreService.toggleSettings();
  }

  public search(event: Event): void {
    event.preventDefault();
    this.coreService.search(true);
  }
}
