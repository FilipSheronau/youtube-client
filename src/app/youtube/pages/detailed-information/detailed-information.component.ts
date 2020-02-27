import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { YoutubeService } from '../../services/youtube.service';
import { SearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss']
})
export class DetailedInformationComponent implements OnInit {
  public card: SearchItem;

  constructor(public youtubeService: YoutubeService, private route: ActivatedRoute, public router: Router) {
    this.route.params.subscribe((params: Params) => {
      if (!this.youtubeService.searchData) {
        this.router.navigate(['/404']);
      } else {
        this.card = this.youtubeService.searchData.find((item) => {
          return item.id === params.id;
        });
      }
    });
  }

  public ngOnInit(): void { }

}
