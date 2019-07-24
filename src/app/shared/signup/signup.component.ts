import { BroadcastserviceService } from './../../services/broadcastservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isRegisterForm: boolean = false;
  manufacturersignupForm: FormGroup;
  buyersignupForm: FormGroup;
  isManufacurer: boolean = false;

  constructor(private router: Router, private fb: FormBuilder, private sharedService: BroadcastserviceService) {
    this.loadManufacturerForm(fb);
    this.loadBuyerForm(fb);
  }

  ngOnInit() {
  }

  public selectSignUp(val) {
    if (val == 0) {
      this.isRegisterForm = true;
      this.isManufacurer = false;
    } else {
      this.isRegisterForm = true;
      this.isManufacurer = true;
    }
  }

  public loadManufacturerForm(fb) {
    this.manufacturersignupForm = fb.group({
      'firstname': [null, Validators.required],
      'lastname': [null, Validators.required],
      'email': [null, Validators.required],
      'companyname': [null, Validators.required],
      'address': [null, Validators.required],
      'city': [null, Validators.required],
      'zipcode': [null],
      'country': [null, Validators.required],
      'phno': [null, Validators.required],
      'website': [null, Validators.required],
      'referencecode': [null, Validators.required],

    });
  }
  public loadBuyerForm(fb) {
    this.buyersignupForm = fb.group({
      'firstname': [null, Validators.required],
      'lastname': [null, Validators.required],
      'email': [null, Validators.required],
      'companyname': [null, Validators.required],
      'jobtitle': [null, Validators.required],
      'country': [null, Validators.required],
      'phno': [null, Validators.required],
      'website': [null, Validators.required],

    });
  }

  public manufactureSignUp() {
    var userObj = {
      "firstname": this.manufacturersignupForm.value.firstname,
      "lastname": this.manufacturersignupForm.value.lastname,
      "email": this.manufacturersignupForm.value.email,
      "companyname": this.manufacturersignupForm.value.companyname,
    }
    //localStorage.setItem("manufacturelogin_flag", "0");
    this.sharedService.hideButtons.emit(true);
    localStorage.setItem("manufactureData", JSON.stringify(userObj));
    if (localStorage.getItem("manufacturelogin_flag") == "0") {
      this.router.navigateByUrl("/seller/profile1");
    } if (localStorage.getItem("manufacturelogin_flag") == "1") {
      this.router.navigateByUrl("/seller/profile1");
    } else {
      localStorage.setItem("manufacturelogin_flag", "0");
      this.router.navigateByUrl("/seller/profile1");
    }

  }
  public buyerSignup() {
    this.router.navigateByUrl("/buyerDashboard");
  }
  public back() {
    console.log("back button isss");
    this.isRegisterForm = false;
  }
}
