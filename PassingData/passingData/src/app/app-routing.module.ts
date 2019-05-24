import { DeparmentDetailComponent } from "./deparment-detail/deparment-detail.component";
import { DepartmentListComponent } from "./department-List/department-List.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/departments", pathMatch: "full" },
  { path: "departments", component: DepartmentListComponent },
  { path: "departments/:id", component: DeparmentDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
