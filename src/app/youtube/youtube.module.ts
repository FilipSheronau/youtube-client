import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsBlockComponent } from
  './components/search-results-block/search-results-block.component';
import { SearchResultItemComponent } from
  './components/search-result-item/search-result-item.component';
import { FilteringCriteriaBlockComponent } from
  './components/filtering-criteria-block/filtering-criteria-block.component';
import { BorderColorDirective } from './directives/border-color.directive';
import { SortPipe } from './pipes/sort.pipe';
import { WordFilterPipe } from './pipes/word-filter.pipe';

@NgModule({
  declarations: [
    SearchResultsBlockComponent,
    SearchResultItemComponent,
    FilteringCriteriaBlockComponent,
    BorderColorDirective,
    SortPipe,
    WordFilterPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SearchResultsBlockComponent,
    SearchResultItemComponent,
    FilteringCriteriaBlockComponent
  ]
})
export class YoutubeModule { }
