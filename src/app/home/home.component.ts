import { PerogonServices } from './../services/perogon-services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  segmentedGroups: any;
  selectedTab: any;

  productGroups: any;


  constructor(private router: Router, private services: PerogonServices) { }

  ngOnInit() {
    this.services.getJSON().subscribe((response: any) => {
      this.segmentedGroups = response.data;

    });
  }

  showListitems() {
    this.router.navigateByUrl('/search');
  }

  signup() {
    this.router.navigateByUrl("signup");
  }

  onCollapsible(val) {
    this.selectedTab = val;
  }

}
