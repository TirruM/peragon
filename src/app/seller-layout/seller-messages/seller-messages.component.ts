import { Component, OnInit } from '@angular/core';
import { PerogonServices } from 'src/app/services/perogon-services.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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
  messageIndex: any;
  currentMessageObj: any;
  mobileWidth: any;
  listClickCount: number = 0;
  constructor(private services: PerogonServices, public breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    console.log(window.innerWidth);
    // if ($(window).width() < 991) {
    if (window.innerWidth < 991) {
      this.mobileWidth = true;
      console.log("not desktop");
    } else {
      this.mobileWidth = false;
    }
    this.services.getSellerMessages().subscribe((response: any) => {
      console.log("seller messages response--->" + JSON.stringify(response));
      this.sellerMessages = response.data;
      this.currentMessageObj = this.sellerMessages[0];
    });

    this.breakpointObserver.observe([
      '(max-width: 991px)'
    ]).subscribe(result => {
      if (result.matches) {
        this.mobileWidth = true;
        console.log('Viewport is 500px or over!');
      } else {
        this.mobileWidth = false;
        console.log('Viewport is getting smaller!');
      }
    });
  }
  onSellerReplyMessage(event: Event) {
    this.replyMessage = (<HTMLInputElement>event.target).value;
  }
  onReplyToBuyer() {
    this.message = this.replyMessage;
  }
  onMessageClick(currentMessageObj, messageIndex) {
    this.messageIndex = messageIndex;
    this.currentMessageObj = currentMessageObj;

    if (this.listClickCount < 1) {
      this.listClickCount++;
    } else {
      this.listClickCount = 0;
    }
  }

}
