import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FilteringCriteriaBlockComponent }
 from './components/filtering-criteria-block/filtering-criteria-block.component';
import { SearchResultsBlockComponent }
 from './components/search-results-block/search-results-block.component';
import { SearchResultItemComponent } from './components/search-result-item/search-result-item.component';
import { BorderColorDirective } from './directives/border-color.directive';
import { SearchPipe } from './pipes/search.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { WordFilterPipe } from './pipes/word-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilteringCriteriaBlockComponent,
    SearchResultsBlockComponent,
    SearchResultItemComponent,
    BorderColorDirective,
    SearchPipe,
    SortPipe,
    WordFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
