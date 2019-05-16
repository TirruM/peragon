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
  constructor(private router: Router, private sharedService: BroadcastserviceService) { }

  ngOnInit() {
  }
  ngAfterContentInit() {

    //this.sharedService.cartData.emit("ngAfterContentInit: " + this.data);

    this.sharedService.hideButtons.subscribe((data: any) => {
      if (data == true) {
        this.signInFlag = false;
      }
    });
  }
  public signIn() {
    this.router.navigateByUrl('/login');
  }

  public signUp() {
    this.router.navigateByUrl('/signup');
  }
  public logout() {
    this.signInFlag = true;
    //localStorage.setItem("manufacturelogin_flag", "0");
    this.router.navigateByUrl('/');
  }

}
