import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-department-List",
  templateUrl: "./department-List.component.html",
  styleUrls: ["./department-List.component.css"]
})
export class DepartmentListComponent implements OnInit {
  departments = [
    { id: 1, name: "Angular" },
    { id: 2, name: "Node" },
    { id: 3, name: "React" },
    { id: 4, name: "JQuery" },
    { id: 5, name: "CSS3" }
  ];
  constructor(private router: Router) {}

  ngOnInit() {}
  onSelect(dep) {
    this.router.navigate(["/departments", dep.id]);
  }
}
