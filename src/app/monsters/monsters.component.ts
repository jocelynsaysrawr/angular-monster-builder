import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserMonsterService } from '../services/user-monster.service';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss']
})
export class MonstersComponent implements OnInit {
  userMonsters: any;
  selectedMonster: any;
  constructor(private _userMonsters: UserMonsterService) {}

  ngOnInit() {
    this._userMonsters.getMonsters().subscribe(data => {
      this.userMonsters = data;
    });
  }
  loadMonster(monster) {
    this._userMonsters.setSelectedMonster(monster);
    this.selectedMonster = monster;
  }
}
