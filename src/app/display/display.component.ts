import { Component, OnInit } from "@angular/core";
import { HeadService } from "../head.service";

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.scss"]
})
export class DisplayComponent implements OnInit {
  selectedHead: Object;
  constructor(public headservice: HeadService) {
    this.selectedHead = headservice.selectedHead;
  }

  ngOnInit() {
    this.headservice.head$.subscribe(head => {
      this.selectedHead = head;
    });
  }
}
