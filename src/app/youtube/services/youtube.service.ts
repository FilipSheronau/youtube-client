import { Injectable } from '@angular/core';
import { SearchItem } from '../models/search-item.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject, interval, Observable } from 'rxjs';
import { debounce, filter, map, mergeMap} from 'rxjs/operators';
import { HttpClient, HttpParams } from  '@angular/common/http';
import { SearchResponse } from '../models/search-response.model';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private searchStream$: Subject<string> = new Subject();
  public search: string;
  public orderBy: string;
  public arrow: string;
  public searchData: SearchItem[];

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private http: HttpClient
  ) {
    this.searchStream$
      .pipe(
        debounce(() => interval(1000)),
        filter(value => value && value.length > 2)
      )
      .subscribe(sub => { this.getItems(sub); });
  }

  public searchItems(): void {
    this.route.queryParams.subscribe((queryParam: Params) => {
      this.search = queryParam.search;
      this.orderBy = queryParam.orderBy;
      this.arrow = queryParam.arrow;
      if (queryParam.load) {
        this.searchStream$.next(this.search);
      }
    });
  }

  public getItems(data: string): void {
    this.http.get<SearchResponse>('search', {
      params: new HttpParams()
        .set('type', 'video')
        .set('part', 'snippet')
        .set('maxResults', '15')
        .set('q', data)
    })
    .pipe(
      map(val => {
        return val.items.map((v) => {
          return v.id.videoId;
        }).join(',');
      }),
      mergeMap((val) => this.http.get<SearchResponse>('videos', {
        params: new HttpParams()
          .set('id', val)
          .set('part', 'snippet,statistics')
      }))
    )
    .subscribe(sub => {
      this.searchData = sub.items;
    });
  }

  public getDetailedInfo(id: string): Observable<SearchItem> {
    return this.http.get<SearchResponse>('videos', {
      params: new HttpParams()
        .set('id', id)
        .set('part', 'snippet,statistics')
    })
    .pipe(
      map((val) => {
        if (val.items[0]) {
          return val.items[0];
        } else {
          this.router.navigate(['/404']);
        }
      })
    );
  }

  public noItems(): void {
    this.router.navigate(['/login']);
  }

  public back(): void {
    this.router.navigate(['/main']);
  }
}
