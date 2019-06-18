import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-for-buyer',
  templateUrl: './for-buyer.component.html',
  styleUrls: ['./for-buyer.component.scss']
})
export class ForBuyerComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  signup() {
    this.router.navigateByUrl("signup");
  }
}
