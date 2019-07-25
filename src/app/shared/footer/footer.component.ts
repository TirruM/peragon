import { Component, OnInit } from '@angular/core';

import { BroadcastserviceService } from "../../services/broadcastservice.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isFooterHide: boolean = false;
  constructor(private broadCastService: BroadcastserviceService) { }

  ngOnInit() {
    this.broadCastService.hideFooter.subscribe((resp) => {
      this.isFooterHide = resp;
    });
  }

}
