import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-rfq',
  templateUrl: './rfq.component.html',
  styleUrls: ['./rfq.component.scss']
})
export class RfqComponent implements OnInit {
  @ViewChild('dataTable') table;
  dataTable: any;
  constructor(private routes: Router) { }

  ngOnInit() {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable(
      {
        responsive: true
      }
    );
  }
  onNavigateToRfqResponse() {
    this.routes.navigateByUrl('seller/rfqHome')
  }

}
