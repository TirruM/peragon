import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  addExportCountriesSwitch: String = "addExportCountries";
  addLinksandwebsiteSwitch: String = "linksandwebsite";
  keyfactsSwitch: String = "add-keyfacts";
  addDescriptionData: String = "no-discription";

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

  addDiscription(){
    this.addDescriptionData = "add-discription";
  }

  displayDiscription(){
    this.addDescriptionData = "show-discription";
  }

  addLinksAndWebsite(){
    this.addLinksandwebsiteSwitch = "add-Linksandweb";
  }

  displayLinksandWebsite(){
    this.addLinksandwebsiteSwitch = "linksandwebsite";
  }

  editKeyFacts(){
    this.keyfactsSwitch = "edit-keyfacts";
  }

  displayKeyFacts(){
    this.keyfactsSwitch = "display-keyfacts";
  }
}
