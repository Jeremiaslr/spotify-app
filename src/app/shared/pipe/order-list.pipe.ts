import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {
 // TO DO: Implement logic 
  transform(value: TrackModel, args: string | null = null, sort: string = 'asc'): TrackModel {
    console.log('', value)
    console.log('', args)
    console.log('', sort)
    return value;

  }

}
