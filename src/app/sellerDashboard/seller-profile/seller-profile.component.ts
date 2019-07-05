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

  public imageSrc: string = 'assets/Images/sports/introductoin image.jpg';
  public bannerImg: string = 'assets/img/tennis-manufacture.jpg';

  constructor() {
    this.selectedTab = '0';
  }

  ngOnInit() {
  }

  onTabClick(currentTab) {
    this.selectedTab = currentTab;
  }

  handleInputChange(e) {  
    console.log("upload Image-->",e);
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
    console.log("upload Image-->",e);
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

