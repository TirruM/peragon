import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rfq',
  templateUrl: './rfq.component.html',
  styleUrls: ['./rfq.component.scss']
})
export class RfqComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit() {
  }
  onNavigateToRfqResponse() {
    this.routes.navigateByUrl('sellerdashboard/rfqHome')
  }

}
