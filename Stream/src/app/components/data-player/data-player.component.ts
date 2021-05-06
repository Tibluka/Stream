import { Component, OnInit } from '@angular/core';
import { Episode } from 'src/app/models/episode';

@Component({
  selector: 'app-data-player',
  templateUrl: './data-player.component.html',
  styleUrls: ['./data-player.component.scss']
})
export class DataPlayerComponent implements OnInit {

  public data: Array<Episode> = []
  public currentEp = 0

  constructor() {
    this.data.push(new Episode)
   }

  ngOnInit(): void {
  }

  loadEpisode(ep: any){
    this.currentEp = Number(ep.number)
  }

  changeSeason(event: Event){

  }
}
