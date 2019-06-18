import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-rfq-details',
  templateUrl: './buyer-rfq-details.component.html',
  styleUrls: ['./buyer-rfq-details.component.scss']
})
export class BuyerRfqDetailsComponent implements OnInit {
  color = 'warn';
  step = 0;
  sendMsg: String = "";
  sendMsg1: String = "";

  setStep(index: number) {
    this.step = index;
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }
  back() {
    this.router.navigate(['/rfq']);
  }
  onSendMsg() {
    this.sendMsg1 = this.sendMsg;
  }
}
