import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { this.loadLoginForm(fb); }

  ngOnInit() {

  }

  public loadLoginForm(fb) {
    this.loginForm = fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required]

    });
  }

  public login() {
    if (this.loginForm.value.email === 'buyer@gmail.com' && this.loginForm.value.password === 'buyer') {
      this.router.navigateByUrl("/buyerDashboard")
    } else if (this.loginForm.value.email === 'seller@gmail.com' && this.loginForm.value.password === 'seller') {
      this.router.navigateByUrl("/seDashboard")
    }

  }
}
