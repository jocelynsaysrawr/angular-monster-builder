import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from './url/url';

@Injectable()
export class EventService {
  private _eventsUrl = `${url}/events`;
  private _specialEventsUrl = `${url}/special`;
  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get<any>(this._eventsUrl);
  }

  getSpecialEvents() {
    return this.http.get<any>(this._specialEventsUrl);
  }
}
