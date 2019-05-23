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
  students = [
    { id: 1, name: "Hiral" },
    { id: 2, name: "Kinjal" },
    { id: 3, name: "Rajal" },
    { id: 4, name: "Rinal" }
  ];

  ngOnInit() {}
}
