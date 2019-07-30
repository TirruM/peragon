import { BroadcastserviceService } from './../../services/broadcastservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  signInFlag: boolean = true;
  dropDownMenu: boolean = false;
  buyerDropDown: boolean = false;
  show: boolean = false;
  constructor(private router: Router, private sharedService: BroadcastserviceService) { }

  ngOnInit() {
    // if (localStorage.getItem("buyer_flag") == "1") {
    //   this.signInFlag = false;
    // }
  }
  ngAfterContentInit() {

    //this.sharedService.cartData.emit("ngAfterContentInit: " + this.data);

    this.sharedService.hideButtons.subscribe((data: any) => {
      console.log("seller login Dat111a--->", data);
      if (data == true) {
        this.signInFlag = false;
      } else {
        this.signInFlag = true;
      }
      this.dropDownMenu = data;
    });



    // this.sharedService.hideBuyerMenu.subscribe((buyerData) => {
    //   this.buyerDropDown = buyerData;
    //   console.log("seller login Data--->",this.buyerDropDown);
    //   if (buyerData == true) {
    //     this.dropDownMenu = true;
    //   }else{
    //     this.dropDownMenu = false;
    //   }
    // })

  }
  toggleCollapse() {
    this.show = !this.show;
  }
  public signIn() {
    this.router.navigateByUrl('/login');
  }

  public signUp() {
    this.router.navigateByUrl('/signup');
  }

  public logout() {
    this.signInFlag = true;
    this.dropDownMenu = false;
    //localStorage.setItem("manufacturelogin_flag", "0");
    this.router.navigateByUrl('/');
  }

  public requestForQuatation() {
    this.router.navigateByUrl('/rfq');
  }
  onDashboardPage() {
    this.router.navigateByUrl('/seller/profile1');
  }

}
