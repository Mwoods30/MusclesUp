import { Component, OnInit } from "@angular/core";
import { UserService } from "./user.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userData;
  constructor(private user: UserService) {}

  ngOnInit() {
    this.user.currentUserData.subscribe(userData => (this.userData = userData));
  }

  changeData(event) {
    var msg = event.target.value;
    this.user.changeData(msg);
  }
  login(data) {
    this.user.changeData(data);
  }
}
import { Component, OnInit } from '@angular/core';
import { UserService } from "../../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: any = {email: '', password: ''};

  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.currentUserData.subscribe((userData: any) => this.userData = userData);
  }

  login(data: any) {
    this.user.changeData(data);
  }
}
