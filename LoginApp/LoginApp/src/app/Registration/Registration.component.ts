import { Component, OnInit } from "@angular/core";
import { LoginService } from "../Login/login.service";
import { Register } from "../Registration/register";
import { Observable } from "rxjs";

import {
  NgForm,
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-Registration",
  templateUrl: "./Registration.component.html",
  styleUrls: ["./Registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  data = false;
  UserForm: any;
  massage: string;
  constructor(
    private formbulider: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.UserForm = this.formbulider.group({
      UserName: ["", [Validators.required]],
      LoginName: ["", [Validators.required]],
      Password: ["", [Validators.required]],
      Email: ["", [Validators.required]],
      ContactNo: ["", [Validators.required]],
      Address: ["", [Validators.required]]
    });
  }
  onFormSubmit() {
    const user = this.UserForm.value;
    this.Createemployee(user);
  }
  Createemployee(register: Register) {
    this.loginService.CreateUser(register).subscribe(() => {
      this.data = true;
      this.massage = "Data saved Successfully";
      this.UserForm.reset();
    });
  }
}
