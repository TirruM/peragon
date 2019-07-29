import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { state } from '@angular/animations';

@Component({
  selector: 'app-buyer-bids',
  templateUrl: './buyer-bids.component.html',
  styleUrls: ['./buyer-bids.component.scss']
})
export class BuyerBidsComponent implements OnInit {

  constructor(private router: Router, public breakpointObserver: BreakpointObserver) { }

  isCarousel: boolean = false;

  ngOnInit() {

    this.breakpointObserver.observe([
      Breakpoints.Small, Breakpoints.HandsetPortrait
    ]).subscribe((state: BreakpointState) => {
      if(state.matches) {
        this.isCarousel = true;
      }
      else {
        this.isCarousel = false;
      }
    });

    // BreakpointObserver.observe(['(max-width: 768px)']).subscribe(result => {
    //   if(result.matches){
    //     this.isCarousel = true;
    //   }
    // });
  }

  createNewRFQ() {
    this.router.navigateByUrl('rfqCreate');    
  }

  rfqDetails() {
    this.router.navigateByUrl('rfqDetails');    
  }
}
