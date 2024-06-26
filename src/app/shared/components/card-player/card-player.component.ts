import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MulimediaService } from '@shared/services/mulimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {

  @Input() mode: 'small' | 'big' = 'small'
  @Input() track: TrackModel = {_id:0, name: '',album:'',url:'',cover:''}

  constructor(
    private multimediaService: MulimediaService
  ) {}

  ngOnInit(): void {
  }

  sendPlay(track: TrackModel) :void {
    // Sending track to player
    this.multimediaService.callback.emit(track)
  }
}
