import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.scss']
})
export class SellerProfileComponentt implements OnInit {
  selectedTab: any;
  profileStrength: String = 'Starter';
  isShowData: boolean = false;
  isShowExportCountries: boolean = false;

  constructor() {
    this.selectedTab = '0';
  }

  ngOnInit() {
  }

  onTabClick(currentTab) {
    console.log("currentTab" + currentTab);
    this.selectedTab = currentTab;
  }

  addExportCountries() {
    this.isShowExportCountries = true;
  }
}

