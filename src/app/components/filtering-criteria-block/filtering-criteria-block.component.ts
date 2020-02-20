import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Sort } from 'src/app/models/sort';
import { Filter } from 'src/app/models/filter';

@Component({
  selector: 'app-filtering-criteria-block',
  templateUrl: './filtering-criteria-block.component.html',
  styleUrls: ['./filtering-criteria-block.component.scss']
})
export class FilteringCriteriaBlockComponent implements OnInit {
  @Output() public sortDataEmmit: EventEmitter<Sort> = new EventEmitter();
  @Output() public wordFilterEmmit: EventEmitter<Filter> = new EventEmitter();
  @ViewChild('filterInput', {static: false}) public filterInput: ElementRef;
  public dateSort: string = 'date';
  public viewsSort: string = 'count o views';
  public wordSort: string = 'by word or sentance';
  public sortData: Sort = {data: '', arrow: ''};
  public isWordSort: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public onDateSort(event: Event): void {
    event.preventDefault();
    this.viewsSort = 'count o views';
    if (this.dateSort === 'date' || this.dateSort === 'date \u25B2') {
      this.dateSort = 'date \u25BC';
      this.sortData.data = 'date';
      this.sortData.arrow = 'up';
    } else if (this.dateSort === 'date \u25BC') {
      this.dateSort = 'date \u25B2';
      this.sortData.data = 'date';
      this.sortData.arrow = 'down';
    }
    this.sortDataEmmit.emit(this.sortData);
  }

  public onViewsSort(event: Event): void {
    event.preventDefault();
    this.dateSort = 'date';
    if (this.viewsSort === 'count o views' || this.viewsSort === 'count o views \u25B2') {
      this.viewsSort = 'count o views \u25BC';
      this.sortData.data = 'views';
      this.sortData.arrow = 'up';
    } else if (this.viewsSort === 'count o views \u25BC') {
      this.viewsSort = 'count o views \u25B2';
      this.sortData.data = 'views';
      this.sortData.arrow = 'down';
    }
    this.sortDataEmmit.emit(this.sortData);
  }

  public onWordSort(): void {
    this.wordFilterEmmit.emit({
      value: this.filterInput.nativeElement.value,
      isOn: this.isWordSort
    });
  }

  public onWordSortSwitch(event: Event): void {
    if (this.wordSort === 'by word or sentance') {
      this.wordSort = 'by word or sentance \u25CF';
      this.isWordSort = true;
    } else {
      this.wordSort = 'by word or sentance';
      this.isWordSort = false;
    }
    this.onWordSort();
  }
}
