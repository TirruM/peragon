import { Component, OnInit, OnDestroy } from '@angular/core';

import { BroadcastserviceService } from "../services/broadcastservice.service";

@Component({
  selector: 'app-seller-layout',
  templateUrl: './seller-layout.component.html',
  styleUrls: ['./seller-layout.component.scss']
})
export class SellerLayoutComponent implements OnInit, OnDestroy {

  constructor(private broadCastService: BroadcastserviceService) { }

  ngOnInit() {
    this.broadCastService.hideFooter.emit(true);
    this.broadCastService.hideButtons.emit(true);
  }
  ngOnDestroy(): void {
    this.broadCastService.hideButtons.emit(false);
    this.broadCastService.hideFooter.emit(false);
  }


}
