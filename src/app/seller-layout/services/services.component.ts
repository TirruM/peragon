import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  addTreatmentsSwitch : String = "noTreatments";
  treatmentDetailsSwitch : String = "addTreatments";
  constructor() { }

  ngOnInit() {
  }

  addTreatments() {
    this.addTreatmentsSwitch = "addTreatments";
  }
  saveTreatments() {
    this.addTreatmentsSwitch = "";
    this.treatmentDetailsSwitch = "treatmentsDetail";
  }
}
