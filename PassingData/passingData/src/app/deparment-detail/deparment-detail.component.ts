import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-deparment-detail",
  templateUrl: "./deparment-detail.component.html",
  styleUrls: ["./deparment-detail.component.css"]
})
export class DeparmentDetailComponent implements OnInit {
  public deparmentID;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.deparmentID = id;
  }
}
