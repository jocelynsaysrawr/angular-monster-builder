import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUserData = {};
  constructor(private _auth: AuthenticationService, private _router: Router) {}

  ngOnInit() {}

  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(
      data => {
        console.log(data);
        localStorage.setItem('token', data.token);
        this._router.navigate(['/monsters']);
      },
      err => console.log(err)
    );
  }
}
