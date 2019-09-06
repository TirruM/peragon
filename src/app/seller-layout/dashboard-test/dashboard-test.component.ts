import { Component, OnInit } from "@angular/core";
import { ChartType, ChartOptions, ChartDataSets } from "chart.js";
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip
} from "ng2-charts";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);
@Component({
  selector: "app-dashboard-test",
  templateUrl: "./dashboard-test.component.html",
  styleUrls: ["./dashboard-test.component.scss"]
})
export class DashboardTestComponent implements OnInit {

  // pi-chart
  public pieChartOptions: ChartOptions = {
    responsive: true
  };
  public pieChartLabels: Label[] = [
    ["Download", "Sales"],
    ["In", "Store", "Sales"],
    "Mail Sales"
  ];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = "pie";
  public pieChartLegend = true;
  public pieChartPlugins = [];

  // bar-chart
  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012"
  ];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Win" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Loss" }
  ];

  types = [
    { id : 1, name: "Day" },
    { id : 2, name: "Last Week" },
    { id : 3, name : "Last Month" },
    { id : 4, name: "Last 90 Days" },
    { id : 5, name: "Custom" }
  ];

  custom : String;
  showDatepicker : boolean;
  showSelect: boolean;
  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  
 // types : [];

  ngOnInit() {
    this.lineChart();
  }

  

  public lineChart() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    chart.data = [
      {
        year: "1930",
        italy: 1,
        germany: 5,
        uk: 3
      },
      {
        year: "1934",
        italy: 1,
        germany: 2,
        uk: 6
      },
      {
        year: "1938",
        italy: 2,
        germany: 3,
        uk: 1
      },
      {
        year: "1950",
        italy: 3,
        germany: 4,
        uk: 1
      },
      {
        year: "1954",
        italy: 5,
        germany: 1,
        uk: 2
      },
      {
        year: "1958",
        italy: 3,
        germany: 2,
        uk: 1
      },
      {
        year: "1962",
        italy: 1,
        germany: 2,
        uk: 3
      },
      {
        year: "1966",
        italy: 2,
        germany: 1,
        uk: 5
      },
      {
        year: "1970",
        italy: 3,
        germany: 5,
        uk: 2
      },
      {
        year: "1974",
        italy: 4,
        germany: 3,
        uk: 6
      },
      {
        year: "1978",
        italy: 1,
        germany: 2,
        uk: 4
      }
    ];

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.opposite = true;

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inversed = true;
    //valueAxis.title.text = "Place taken";
    //valueAxis.renderer.minLabelPosition = 0.01;

    // Create series
    let series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = "italy";
    series1.dataFields.categoryX = "year";
    series1.name = "Win";
    series1.strokeWidth = 3;
    series1.bullets.push(new am4charts.CircleBullet());
    // series1.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
    series1.legendSettings.valueText = "{valueY}";
    series1.visible = false;

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "germany";
    series2.dataFields.categoryX = "year";
    series2.name = "Loss";
    series2.strokeWidth = 3;
    series2.bullets.push(new am4charts.CircleBullet());
    // series2.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
    series2.legendSettings.valueText = "{valueY}";

    // Add chart cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomY";

    // Add legend
    chart.legend = new am4charts.Legend();
  }

  

  selectDate(value) {
    console.log("selected value====",value);
    if(value == 5) {
      this.showDatepicker = true;
    }else {
      this.showDatepicker = false;
    }
  }
}
