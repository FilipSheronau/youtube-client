import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sort } from 'src/app/models/sort';

@Component({
  selector: 'app-filtering-criteria-block',
  templateUrl: './filtering-criteria-block.component.html',
  styleUrls: ['./filtering-criteria-block.component.scss']
})
export class FilteringCriteriaBlockComponent implements OnInit {
  @Output() public sortDataEmmit: EventEmitter<Sort> = new EventEmitter();
  public dateSort: string = 'date';
  public viewsSort: string = 'count o views';
  public sortData: Sort = {data: '', arrow: ''};

  constructor() {}

  public ngOnInit(): void {}

  public onDateSort(event: Event): void {
    event.preventDefault();
    this.viewsSort = 'count o views';
    if (this.dateSort === 'date' || this.dateSort === 'date\u2191') {
      this.dateSort = 'date\u2193';
      this.sortData.data = 'date';
      this.sortData.arrow = 'up';
    } else if (this.dateSort === 'date\u2193') {
      this.dateSort = 'date\u2191';
      this.sortData.data = 'date';
      this.sortData.arrow = 'down';
    }
    this.sortDataEmmit.emit(this.sortData);
  }

  public onViewsSort(event: Event): void {
    event.preventDefault();
    this.dateSort = 'date';
    if (this.viewsSort === 'count o views' || this.viewsSort === 'count o views\u2191') {
      this.viewsSort = 'count o views\u2193';
      this.sortData.data = 'views';
      this.sortData.arrow = 'up';
    } else if (this.viewsSort === 'count o views\u2193') {
      this.viewsSort = 'count o views\u2191';
      this.sortData.data = 'views';
      this.sortData.arrow = 'down';
    }
    this.sortDataEmmit.emit(this.sortData);
  }

  public onWordSort(event: Event): void {
    event.preventDefault();
  }
}
