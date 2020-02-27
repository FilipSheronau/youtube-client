import { Injectable } from '@angular/core';
import { SearchItem } from '../models/search-item.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ResponseService } from './response.service';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  public search: string;
  public orderBy: string;
  public arrow: string;
  public searchData: SearchItem[];

  constructor(
    private route: ActivatedRoute,
    private responseService: ResponseService,
    public router: Router,
  ) { }

  public searchItems(): void {
    this.route.queryParams.subscribe((queryParam: Params) => {
      this.search = queryParam.search;
      this.orderBy = queryParam.orderBy;
      this.arrow = queryParam.arrow;
      if (queryParam.load) {
        this.searchData = this.getItems(this.search);
      }
    });
  }

  public getItems(data: string): SearchItem[] {
    if (!this.responseService.youTubeResponse.items) { return []; }
    if (!data) { return this.responseService.youTubeResponse.items; }
    return this.responseService.youTubeResponse.items.filter((value) => {
      return value.snippet.title.toLowerCase().includes(data.toLowerCase());
    });
  }

  public noItems(): void {
    this.router.navigate(['/login']);
  }

  public back(): void {
    this.router.navigate(['/main']);
  }
}
