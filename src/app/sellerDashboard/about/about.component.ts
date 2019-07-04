import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  addExportCountriesSwitch: String = "addExportCountries";
  // addExportCountriesSwitch: String = "not-filled";

  countriesList : String = "editEC";
  
  
  constructor() { }

  ngOnInit() {
  }

  addExportCountries() {
    this.addExportCountriesSwitch = "editEC";
  }

  displayCountries() {
    this.addExportCountriesSwitch = "";
    this.countriesList = "countries-list";
  }
}