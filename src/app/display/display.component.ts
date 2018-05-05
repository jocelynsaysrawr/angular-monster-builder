import { Component, OnInit } from "@angular/core";
import { HeadService } from "../head.service";
import { BodyService } from "../body.service";

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.scss"]
})
export class DisplayComponent implements OnInit {
  selectedHead: Object;
  constructor(
    public headService: HeadService,
    public bodyService: BodyService
  ) {
    this.selectedHead = headService.selectedHead;
  }

  ngOnInit() {
    this.headService.head$.subscribe(head => {
      this.selectedHead = head;
    });
  }
}
