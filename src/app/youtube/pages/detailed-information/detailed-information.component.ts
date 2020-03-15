import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { YoutubeService } from '../../services/youtube.service';
import { SearchItem } from '../../models/search-item.model';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss']
})
export class DetailedInformationComponent implements OnInit {
  public card: Observable<SearchItem> = this.route.params
    .pipe(
      mergeMap((val) => this.youtubeService.getDetailedInfo(val.id))
    );

  constructor(public youtubeService: YoutubeService, private route: ActivatedRoute, public router: Router) {}

  public ngOnInit(): void {}

}
