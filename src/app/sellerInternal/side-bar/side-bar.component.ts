import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: './profile1', title: 'Profile', icon: 'user', class: '' },
  { path: './messages', title: 'Messages', icon: 'user', class: '' },
  { path: './rfq', title: 'Rfq', icon: 'user', class: '' },
  { path: './search', title: 'Search', icon: 'user', class: '' },
  { path: './bookmarks', title: 'BookMarks', icon: 'user', class: '' },
  { path: './showrooms', title: 'ShowRooms', icon: 'user', class: '' },

];
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  menuItems: any[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  /* isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }; */
  public navigateToLogin() {
    console.log("navigation");
    this.router.navigate(['/login']);
  }

  public menuClick(menuItem) {
    console.log("menuItem-->" + JSON.stringify(menuItem));

  }


}
