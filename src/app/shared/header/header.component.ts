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
    this.sharedService.hideButtons.subscribe((data: any) => {
      console.log("hidebtn data", data);
      this.signInFlag = data.btns;
      this.dropDownMenu = data.dropDown;
    });
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
    this.router.navigateByUrl('/');
  }

  public requestForQuatation() {
    this.router.navigateByUrl('/rfq');
  }
  onDashboardPage() {
    this.router.navigateByUrl('/seller/profile1');
  }

}
