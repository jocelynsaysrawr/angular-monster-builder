import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from './url/url';

@Injectable()
export class UserMonsterService {
  private _url = `${url}/monsters`;
  private monsters = [];
  selectedMonster: Object;

  constructor(private http: HttpClient) {}

  getMonsters() {
    return this.http.get<any>(this._url);
  }
  setSelectedMonster(monster) {
    this.selectedMonster = monster;
    console.log(this.selectedMonster);
  }
}
