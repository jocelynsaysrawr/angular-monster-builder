import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heads',
  templateUrl: './heads.component.html',
  styleUrls: ['./heads.component.scss']
})
export class HeadsComponent implements OnInit {
  allHeads = ['Big Head', 'Small Head', 'Little Head', 'Fat Head'];

  constructor() { }

  ngOnInit() {
  }

}
