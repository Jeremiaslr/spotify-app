import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MulimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }
}
