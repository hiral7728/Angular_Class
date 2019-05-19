import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { GenericComponent } from "./pages/generic/generic.component";
import { ElementssComponent } from "./pages/elementss/elementss.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "elements", component: ElementssComponent },
  { path: "generic", component: GenericComponent },
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
