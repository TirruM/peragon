import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-bids',
  templateUrl: './buyer-bids.component.html',
  styleUrls: ['./buyer-bids.component.scss']
})
export class BuyerBidsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createNewRFQ() {
    this.router.navigateByUrl('rfqCreate');    
  }
}
