import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-messages',
  templateUrl: './seller-messages.component.html',
  styleUrls: ['./seller-messages.component.scss']
})
export class SellerMessagesComponent implements OnInit {

  isShowUser: boolean = false;
  replyMessage: string;
  message: string;
  constructor() { }

  ngOnInit() {

  }
  onSellerReplyMessage(event: Event) {
    this.replyMessage = (<HTMLInputElement>event.target).value;
  }
  onReplyToBuyer() {
    this.message = this.replyMessage;
  }

}
