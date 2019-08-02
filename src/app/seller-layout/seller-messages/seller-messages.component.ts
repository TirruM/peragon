import { Component, OnInit } from '@angular/core';
import { PerogonServices } from 'src/app/services/perogon-services.service';

@Component({
  selector: 'app-seller-messages',
  templateUrl: './seller-messages.component.html',
  styleUrls: ['./seller-messages.component.scss']
})
export class SellerMessagesComponent implements OnInit {

  isShowUser: boolean = false;
  replyMessage: string;
  message: string;
  sellerMessages: any;
  constructor(private services: PerogonServices) { }

  ngOnInit() {
    this.services.getSellerMessages().subscribe((response: any) => {
      console.log("seller messages response--->" + JSON.stringify(response));
      this.sellerMessages = response.data;
    });
  }
  onSellerReplyMessage(event: Event) {
    this.replyMessage = (<HTMLInputElement>event.target).value;
  }
  onReplyToBuyer() {
    this.message = this.replyMessage;
  }

}
