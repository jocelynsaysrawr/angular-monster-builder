import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerUserData = {};

  constructor(private _auth: AuthenticationService, private _router: Router) {}

  ngOnInit() {}

  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(
      data => {
        console.log(data);
        localStorage.setItem('token', data.token);
        this._router.navigate(['/special']);
      },
      err => console.log(err)
    );
  }
}
