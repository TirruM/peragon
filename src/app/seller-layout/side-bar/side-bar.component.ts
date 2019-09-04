import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: './dashboard', title: 'Dashboard', icon: 'person', class: '' },
  { path: './profile1', title: 'Company Profile', icon: 'person', class: '' },
  { path: './messages', title: 'Messaging', icon: 'sms', class: '' },
  { path: './rfq', title: 'RFQ', icon: 'help', class: '' },
  { path: './search', title: 'Search', icon: 'search', class: '' },
  { path: './bookmarks', title: 'Bookmarks', icon: 'star_border', class: '' },
  { path: './showrooms', title: 'Showroom', icon: 'time_to_leave', class: '' },
  { path: './newsfeed', title: 'Newsfeed', icon: 'content_paste', class: '' }

];
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  menuItems: any[];
  show: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    $(function () {
      $('.sidebartoggler').on('click', function () {
        if ($('#sidebar-wrapper').hasClass('mini-sidebar')) {
          $('body').trigger('resize');
          $('#sidebar-wrapper').removeClass('mini-sidebar');
        } else {
          $('body').trigger('resize');
          $('#sidebar-wrapper').addClass('mini-sidebar');
        }
      });
    });
  }
  /* isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }; */
  public toggleCollapse() {
    this.show = !this.show;

  }
  public navigateToLogin() {
    this.router.navigate(['/login']);
  }

  public menuClick(menuItem) {
    this.show = !this.show;
    $(function () {
      if ($('#sidebar-wrapper').hasClass('mini-sidebar')) {
        $('body').trigger('resize');
        $('#sidebar-wrapper').removeClass('mini-sidebar');
      } else {
        $('body').trigger('resize');
        $('#sidebar-wrapper').addClass('mini-sidebar');
      }

    });
  }


}
