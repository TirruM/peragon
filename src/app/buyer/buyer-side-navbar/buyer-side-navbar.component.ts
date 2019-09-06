import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyer-side-navbar',
  templateUrl: './buyer-side-navbar.component.html',
  styleUrls: ['./buyer-side-navbar.component.scss']
})
export class BuyerSideNavbarComponent implements OnInit {
  show: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  public toggleCollapse() {
    this.show = !this.show;

  }
}
