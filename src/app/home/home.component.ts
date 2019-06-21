import { PerogonServices } from './../services/perogon-services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: any;
  selectedTab: any;

  mainCategory:any;


  constructor(private router: Router, private services: PerogonServices) { }

  ngOnInit() {
    this.services.getJSON().subscribe((response: any) => {
      this.categories = response.data;
      console.log("perogon categories----->" + JSON.stringify(this.categories));
      
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
