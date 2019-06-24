import { BroadcastserviceService } from './../../services/broadcastservice.service';
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

  constructor(private router: Router, private fb: FormBuilder, private sharedService: BroadcastserviceService) { this.loadLoginForm(fb); }

  ngOnInit() {

  }


  public loadLoginForm(fb) {
    this.loginForm = fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required]

    });
  }

  public login() {
    this.sharedService.hideButtons.emit(true);
    if (this.loginForm.value.email === 'buyer@gmail.com' && this.loginForm.value.password === 'buyer') {
      this.sharedService.hideBuyerMenu.emit(true);
      localStorage.setItem("buyer_flag", "1");
      console.log("hello");
      this.router.navigateByUrl("/buyerDashboard");
    } else if (this.loginForm.value.email === 'seller@gmail.com' && this.loginForm.value.password === 'seller') {
      this.router.navigateByUrl("/sellerdashboard/rfq");
    }

  }
}
