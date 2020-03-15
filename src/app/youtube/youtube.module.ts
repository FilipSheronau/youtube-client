import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultItemComponent } from
  './components/search-result-item/search-result-item.component';
import { BorderColorDirective } from './directives/border-color.directive';
import { SortPipe } from './pipes/sort.pipe';
import { WordFilterPipe } from './pipes/word-filter.pipe';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { YoutubeService } from './services/youtube.service';
import { DetailedInformationComponent } from './pages/detailed-information/detailed-information.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ParamInterceptor } from './param.interceptor';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ParamInterceptor,
  multi: true
};

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
    HttpClientModule
  ],
  exports: [
    MainComponent,
    SearchResultItemComponent
  ],
  providers: [
    YoutubeService,
    INTERCEPTOR_PROVIDER
  ]
})
export class YoutubeModule { }
