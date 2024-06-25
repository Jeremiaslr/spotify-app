import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api

  constructor(private httpClient: HttpClient) {}

  getAllTracks$():Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      map(({ data }: any) => {
        return data
      })
    )
  }

  getAllRandom$():Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      map(({ data }: any) => {
        return data.reverse()
      })
    )
  }

}
