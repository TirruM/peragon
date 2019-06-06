import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-buyer-rfq-create',
  templateUrl: './buyer-rfq-create.component.html',
  styleUrls: ['./buyer-rfq-create.component.scss']
})
export class BuyerRfqCreateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/rfq']);
  }
}
