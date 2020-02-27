import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultItemComponent } from
  './components/search-result-item/search-result-item.component';
import { BorderColorDirective } from './directives/border-color.directive';
import { SortPipe } from './pipes/sort.pipe';
import { WordFilterPipe } from './pipes/word-filter.pipe';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ResponseService } from './services/response.service';
import { YoutubeService } from './services/youtube.service';
import { DetailedInformationComponent } from './pages/detailed-information/detailed-information.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'detailed-information/:id', component: DetailedInformationComponent },
];

@NgModule({
  declarations: [
    MainComponent,
    SearchResultItemComponent,
    BorderColorDirective,
    SortPipe,
    WordFilterPipe,
    DetailedInformationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    MainComponent,
    SearchResultItemComponent
  ],
  providers: [
    ResponseService,
    YoutubeService
  ]
})
export class YoutubeModule { }
