import { Component, OnInit, Input } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public youtubeService: YoutubeService, public coreService: CoreService) {}

  public ngOnInit(): void {
    this.youtubeService.searchItems();
  }
}
