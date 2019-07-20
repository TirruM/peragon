import { PerogonServices } from "./../services/perogon-services.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  segmentedGroups: any;
  selectedTab: any;
  outerArray: any = [];
  productGroups: any;
  categoryArr: [];
  rowIndex: any;
  currentCategoryObj: any;
  constructor(private router: Router, private services: PerogonServices) { }

  ngOnInit() {
    this.categoryItems();

  }
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    "nextArrow": "<div class='fa fa-arrow-right nextArrowBtn' style='position: absolute;z-index: 1000;top: 50%;right: -25px;'></div>",
    "prevArrow": "<div class='fa fa-arrow-left prevArrowBtn' style='position: absolute;z-index: 1000;top: 50%;left: -25px;'></div>",
    dots: false,
    infinite: true,
    arrows: true
  };

  public categoryItems() {
    this.services.getJSON().subscribe((response: any) => {
      this.segmentedGroups = response.data;
      let segmentedGroupsLength = this.segmentedGroups.length;
      let increment = 0;
      let outerArray = [];
      for (let i = 0; i < segmentedGroupsLength; i++) {
        if (i % 3 == 0) {
          increment = 0;
        }
        if (increment === 0) {
          var innerArray = [];
          innerArray.push(this.segmentedGroups[i]);
          increment++;
        } else {
          innerArray.push(this.segmentedGroups[i]);
          increment++;
        }

        if (increment == 2) {
          this.outerArray.push(innerArray);
        }
      }
    });
  }

  showListitems() {
    this.router.navigateByUrl("/search");
  }

  signup() {
    this.router.navigateByUrl("signup");
  }

  onCollapsible(currentCategory, rowIndex) {
    this.rowIndex = rowIndex;
    this.currentCategoryObj = currentCategory;
  }
}
