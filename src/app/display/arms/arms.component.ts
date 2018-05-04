import { Component, OnInit } from "@angular/core";
import { ArmService } from "../../arm.service";

@Component({
  selector: "app-arms",
  templateUrl: "./arms.component.html",
  styleUrls: ["./arms.component.scss"]
})
export class ArmsComponent implements OnInit {
  constructor(public armService: ArmService) {
    this.arm$ = 
  }

  ngOnInit() {}
}
