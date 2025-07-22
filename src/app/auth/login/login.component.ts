import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from "../../user.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
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