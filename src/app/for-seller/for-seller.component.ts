import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-for-seller',
  templateUrl: './for-seller.component.html',
  styleUrls: ['./for-seller.component.scss']
})
export class ForSellerComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  signup() {
    this.router.navigateByUrl("signup");
  }

}
