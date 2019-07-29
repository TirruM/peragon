import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

import { BroadcastserviceService } from "../services/broadcastservice.service";
declare var $: any;

@Component({
  selector: 'app-seller-layout',
  templateUrl: './seller-layout.component.html',
  styleUrls: ['./seller-layout.component.scss']
})
export class SellerLayoutComponent implements OnInit, OnDestroy, AfterViewInit {
  showMinisidebar = false;
  constructor(private broadCastService: BroadcastserviceService) { }

  ngOnInit() {
    this.broadCastService.hideFooter.emit(true);
    this.broadCastService.hideButtons.emit(true);
  }
  ngOnDestroy(): void {
    this.broadCastService.hideButtons.emit(false);
    this.broadCastService.hideFooter.emit(false);
  }
  ngAfterViewInit() {
    const set = function () {
      const width =
        window.innerWidth > 0 ? window.innerWidth : this.screen.width;
      const topOffset = 0;
      if (width < 1170) {
        $('#seller-wrapper').addClass('mini-sidebar');
      } else {
        $('#seller-wrapper').removeClass('mini-sidebar');
      }
    };
    $(window).ready(set);
    $(window).on('resize', set);

    $('body').trigger('resize');
  }

}
