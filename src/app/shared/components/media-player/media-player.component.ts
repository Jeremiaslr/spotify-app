import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {

  mockCover: TrackModel = {
    cover: '',
    albun: 'Gioli & Assia',
    name: 'BEBE (Oficial)',
    url: 'http://localhost/track.mp3',
    _id: 1,
    
  }
}
