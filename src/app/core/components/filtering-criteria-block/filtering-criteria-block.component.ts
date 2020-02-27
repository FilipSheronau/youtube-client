import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-filtering-criteria-block',
  templateUrl: './filtering-criteria-block.component.html',
  styleUrls: ['./filtering-criteria-block.component.scss']
})
export class FilteringCriteriaBlockComponent implements OnInit {
  @ViewChild('filterInput', {static: false}) public filterInput: ElementRef;
  public dateSort: string = 'date';
  public viewsSort: string = 'count o views';
  public wordFilter: string = 'by word or sentance';
  public sortValue: string;
  public sortArrow: string;
  public isWordFilter: boolean = false;

  constructor(private coreService: CoreService) {}

  public ngOnInit(): void {}

  public onDateSort(event: Event): void {
    event.preventDefault();
    this.viewsSort = 'count o views';
    if (this.dateSort === 'date' || this.dateSort === 'date \u25B2') {
      this.dateSort = 'date \u25BC';
      this.sortValue = 'date';
      this.sortArrow = 'up';
    } else if (this.dateSort === 'date \u25BC') {
      this.dateSort = 'date \u25B2';
      this.sortValue = 'date';
      this.sortArrow = 'down';
    }
    this.coreService.orderBy = this.sortValue;
    this.coreService.arrow = this.sortArrow;
    this.coreService.search();
  }

  public onViewsSort(event: Event): void {
    event.preventDefault();
    this.dateSort = 'date';
    if (this.viewsSort === 'count o views' || this.viewsSort === 'count o views \u25B2') {
      this.viewsSort = 'count o views \u25BC';
      this.sortValue = 'views';
      this.sortArrow = 'up';
    } else if (this.viewsSort === 'count o views \u25BC') {
      this.viewsSort = 'count o views \u25B2';
      this.sortValue = 'views';
      this.sortArrow = 'down';
    }
    this.coreService.orderBy = this.sortValue;
    this.coreService.arrow = this.sortArrow;
    this.coreService.search();
  }

  public onWordFilter(): void {
    this.coreService.filterValue = this.filterInput.nativeElement.value;
  }

  public wordFilterSwitch(event: Event): void {
    event.preventDefault();
    if (this.wordFilter === 'by word or sentance') {
      this.wordFilter = 'by word or sentance \u25CF';
      this.isWordFilter = true;
    } else {
      this.wordFilter = 'by word or sentance';
      this.isWordFilter = false;
    }
    this.coreService.isFilter = this.isWordFilter;
  }
}
