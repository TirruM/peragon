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
  tabsObjArray = [];
  currentTabObj: any;
  public imageSrc: string = 'assets/Images/sports/introductoin image.jpg';
  public bannerImg: string = 'assets/img/tennis-manufacture.jpg';

  constructor() {
    this.selectedTab = '0';
  }

  ngOnInit() {
    this.onPrepareTabsObj();
  }
  onPrepareTabsObj() {
    for (var i = 0; i < 3; i++) {
      var currentTab = [];
      if (i == 0) {
        var summaryTabObj = {
          tabName: "ShowRoom",
          tabClick: '6'
        }
        currentTab.push(summaryTabObj);
        var summaryTabObj = {
          tabName: "Company Logo",
          tabClick: ''
        }
        currentTab.push(summaryTabObj);
        var summaryTabObj = {
          tabName: "Compliance",
          tabClick: '4'
        }
        currentTab.push(summaryTabObj);
        var summaryTabObj = {
          tabName: "Export Countries",
          tabClick: '1'
        }
        currentTab.push(summaryTabObj);
        this.tabsObjArray.push(currentTab);

      } else if (i == 1) {
        var summaryTabObj = {
          tabName: "Materials",
          tabClick: '2'
        }
        currentTab.push(summaryTabObj);
        var summaryTabObj = {
          tabName: "Fabric Types",
          tabClick: '2'
        }
        currentTab.push(summaryTabObj);
        var summaryTabObj = {
          tabName: "Treatments",
          tabClick: '3'
        }
        currentTab.push(summaryTabObj);
        var summaryTabObj = {
          tabName: "Lead time",
          tabClick: '1'
        }
        currentTab.push(summaryTabObj);

        var summaryTabObj = {
          tabName: "Minimum order quanity",
          tabClick: '1'
        }
        currentTab.push(summaryTabObj);

        var summaryTabObj = {
          tabName: "Location pictures",
          tabClick: '5'
        }
        currentTab.push(summaryTabObj);

        this.tabsObjArray.push(currentTab);
      } else if (i == 2) {
        var summaryTabObj = {
          tabName: "Description",
          tabClick: '1'
        }
        currentTab.push(summaryTabObj);
        var summaryTabObj = {
          tabName: "Links and websites",
          tabClick: '1'
        }
        currentTab.push(summaryTabObj);
        var summaryTabObj = {
          tabName: "Key facts",
          tabClick: '1'
        }
        currentTab.push(summaryTabObj);
        var summaryTabObj = {
          tabName: "Production countries",
          tabClick: '1'
        }
        currentTab.push(summaryTabObj);
        var summaryTabObj = {
          tabName: "Machinery",
          tabClick: '3'
        }
        currentTab.push(summaryTabObj);
        this.tabsObjArray.push(currentTab);
      }
    }
    this.currentTabObj = this.tabsObjArray[0];
  }
  onProgressBarClick(val) {
    this.currentTabObj = this.tabsObjArray[val];
  }

  onTabClick(currentTab) {
    this.selectedTab = currentTab;
  }

  handleInputChange(e) {
    console.log("upload Image-->", e);
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
  }

  handleInputChange2(e) {
    console.log("upload Image-->", e);
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded2.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded2(e) {
    let reader = e.target;
    this.bannerImg = reader.result;
  }



}

