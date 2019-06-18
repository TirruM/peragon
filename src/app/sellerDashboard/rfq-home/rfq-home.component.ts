import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rfq-home',
  templateUrl: './rfq-home.component.html',
  styleUrls: ['./rfq-home.component.scss']
})
export class RfqHomeComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit() {
  }
  onBackToRfq() {
    this.routes.navigateByUrl('sellerdashboard/rfq')
  }
}
