import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

declare var $;

@Component({
  selector: 'app-seller-myproducts',
  templateUrl: './seller-myproducts.component.html',
  styleUrls: ['./seller-myproducts.component.scss']
})
export class SellerMyproductsComponent implements OnInit {
  @ViewChild('dataTable') table;
  dataTable: any;
  
  constructor(private router: Router ) { }

  ngOnInit() {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable(
      {
        responsive: true
      }
    );
  }

  public addNewProduct(){
    this.router.navigateByUrl('/addProduct');
  }

  

}
