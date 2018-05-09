import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss']
})
export class MonstersComponent implements OnInit {
  data: any;
  constructor(private http: HttpClient) {
    this.http.get<any>('http://localhost:3000/monsters').subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {}
}
