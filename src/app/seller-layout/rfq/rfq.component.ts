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

  // slides = [
  //   {
  //     img: "assets/Images/rfqImage1.jfif",
  //     time: "1 hour ago",
  //     name: "Men's Polo Shirt"
  //   },
  //   {
  //     img: "assets/Images/rfqImage2.jfif",
  //     time: "1 hour ago",
  //     name: "Men's Sweater"
  //   },
  //   {
  //     img: "assets/Images/rfqimage3.jpg",
  //     time: "2019-06-24",
  //     name: "T-Shirts"
  //   },
  //   {
  //     img: "assets/Images/rfqimage3.jpg",
  //     time: "2019-06-24",
  //     name: "T-Shirts"
  //   }
  // ];
  
  slideConfig = {
    slidesToShow : 4,
    slidesToScroll: 1,
    // "nextArrow":"<div class='nav-btn next-slide'></div>",
    "nextArrow": "<div class='material-icons nextArrowBtn' style='color:#f2581d;'>arrow_forward_ios</div>",
    "prevArrow": "<div class='material-icons prevArrowBtn' style='color:#f2581d;'>arrow_back_ios</div>",
    // "prevArrow":"<div class='nav-btn prev-slide'></div>",
    dots: false,
    infinite: true,
    arrows: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint : 768,
        settings : {
          slidesToShow: 2,
        }
      },
      {
        breakpoint : 991,
        settings : {
          slidesToShow : 3,
        }
      },
      {
        breakpoint : 1200,
        settings : {
          slidesToShow : 4,
        }
      }

    ] 
  };

}
