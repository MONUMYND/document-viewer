import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  jwtToken: any;
  constructor() { }
  getToken() {
    this.jwtToken = localStorage.getItem('access_token');
    if (this.jwtToken) {
      return this.jwtToken;
    }
    return '';
  }
}
