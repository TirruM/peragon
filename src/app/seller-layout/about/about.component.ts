import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  aboutLinksForm: FormGroup;

  addExportCountriesSwitch: String = "addExportCountries";
  addLinksandwebsiteSwitch: String = "linksandwebsite";
  keyfactsSwitch: String = "add-keyfacts";
  addDescriptionData: String = "no-discription";

  countriesList: String = "editEC";
  isShowData: boolean = true;
  link: string;
  url: string;

  constructor() {}

  ngOnInit() {
    this.aboutLinksForm = new FormGroup({
      linkDescription: new FormControl(""),
      url: new FormControl("")
    });

    this.link = localStorage.getItem("link");
    this.url = localStorage.getItem("url");
  }

  // onlinksFormSubmit(linksForm: FormGroup) {
  //   console.log("links Form", linksForm);
  // }

  addExportCountries() {
    this.addExportCountriesSwitch = "editEC";
  }

  displayCountries() {
    this.addExportCountriesSwitch = "";
    this.countriesList = "countries-list";
  }

  addDiscription() {
    this.addDescriptionData = "add-discription";
  }

  displayDiscription() {
    this.addDescriptionData = "show-discription";
  }

  addLinksAndWebsite() {
    this.addLinksandwebsiteSwitch = "add-Linksandweb";
  }

  displayLinksandWebsite() {
    this.aboutLinksForm.reset();
    this.addLinksandwebsiteSwitch = "linksandwebsite";
  }
  public onDisplayLinks() {
    this.addLinksandwebsiteSwitch = "linksandwebsite";
    localStorage.setItem("link", this.aboutLinksForm.value.linkDescription);
    localStorage.setItem("url", this.aboutLinksForm.value.url);
    this.link = this.aboutLinksForm.value.linkDescription;
    this.url = this.aboutLinksForm.value.url;
    this.aboutLinksForm.reset();
  }

  editKeyFacts() {
    this.keyfactsSwitch = "edit-keyfacts";
  }

  displayKeyFacts() {
    this.keyfactsSwitch = "display-keyfacts";
  }
}
