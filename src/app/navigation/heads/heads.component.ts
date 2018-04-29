import { Component, OnInit } from "@angular/core";
import { HeadService } from "../../head.service";

@Component({
  selector: "app-heads",
  templateUrl: "./heads.component.html",
  styleUrls: ["./heads.component.scss"]
})
export class HeadsComponent implements OnInit {
  allHeads: Array<Object>;

  constructor(public headservice: HeadService) {
    this.allHeads = headservice.allHeads;
  }

  ngOnInit() {}
}
