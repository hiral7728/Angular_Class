import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../Login/login.service";
import { FormsModule } from "@angular/forms";
@Component({
  selector: "app-Login",
  templateUrl: "./Login.component.html",
  styleUrls: ["./Login.component.css"]
})
export class LoginComponent implements OnInit {
  model: any = {};

  errorMessage: string;
  constructor(private router: Router, private LoginService: LoginService) {}

  ngOnInit() {
    sessionStorage.removeItem("UserName");
    sessionStorage.clear();
  }
  login() {
    debugger;
    this.LoginService.Login(this.model).subscribe(
      data => {
        debugger;
        if (data.Status == "Success") {
          this.router.navigate(["/Dashboard"]);
          debugger;
        } else {
          this.errorMessage = data.Message;
        }
      },
      error => {
        this.errorMessage = error.message;
      }
    );
  }
}
