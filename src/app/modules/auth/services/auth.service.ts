import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  sendCredentials(emial:string, password:string) :void {
    console.log('email, password')
  }
}
