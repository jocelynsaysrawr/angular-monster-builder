import { Component, OnInit } from "@angular/core";
import { ArmService } from "../../arm.service";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";

@Component({
  selector: "app-arms",
  templateUrl: "./arms.component.html",
  styleUrls: ["./arms.component.scss"]
})
export class ArmsComponent implements OnInit {
  selectedArms: Object;
  armUrl$: Observable<string>;

  constructor(public armService: ArmService) {
    this.selectedArms = armService.selectedArms;
    this.armUrl$ = armService.arm$.pipe(map(value => value.url));
  }

  ngOnInit() {}
}
