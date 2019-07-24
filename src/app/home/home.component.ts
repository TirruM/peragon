import { PerogonServices } from "./../services/perogon-services.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
declare const $: any;
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
  innerRowIndex: any;
  currentCategoryObj: any;
  mobileWidth: any;
  constructor(private router: Router, private services: PerogonServices) { }

  ngOnInit() {
    console.log("mobile width" + $(window).width());

    if ($(window).width() < 991) {
      this.mobileWidth = true;
      console.log("not desktop");
    } else {
      this.mobileWidth = false;
    }
    this.categoryItems();

  }
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    "nextArrow": "<div class='material-icons nextArrowBtn' style='position: absolute;z-index: 1000;top: 33%;right: -40px;font-size: 45px;color:#f2581d;'>arrow_forward_ios</div>",
    "prevArrow": "<div class='material-icons prevArrowBtn' style='position: absolute;z-index: 1000;top: 33%;left: -25px;font-size: 45px;color:#f2581d;'>arrow_back_ios</div>",
    dots: false,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
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

  onCollapsible(currentCategory, rowIndex, innerRowIndex) {
    this.rowIndex = rowIndex;
    this.innerRowIndex = innerRowIndex;
    this.currentCategoryObj = currentCategory;
  }
}
