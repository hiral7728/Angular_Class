import { Component, OnInit, Directive } from "@angular/core";

@Component({
  selector: "app-allDiractive",
  templateUrl: "./allDiractive.component.html",
  styleUrls: ["./allDiractive.component.css"]
})
export class AllDiractiveComponent implements OnInit {
  constructor() {}
  courses = [1, 2, 3];
  movies = [1, 2, 3];
  viewMode = "map";
  ngOnInit() {}
}
