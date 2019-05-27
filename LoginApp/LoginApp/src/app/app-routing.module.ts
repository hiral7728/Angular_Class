import { RegistrationComponent } from "./Registration/Registration.component";
import { LoginComponent } from "./Login/Login.component";
import { HomeComponent } from "./Home/Home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent,
    data: {
      title: "Login Page"
    }
  },
  {
    path: "home",
    component: HomeComponent,
    data: {
      title: "Home Page"
    }
  },
  {
    path: "register",
    component: RegistrationComponent,
    data: {
      title: "New User Registration Page"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
