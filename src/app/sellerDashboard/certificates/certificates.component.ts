import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {
  certificateAddSwitch: String = "add-certificates";
  // certificateAddSwitch: String = "not-filled";
  header: String = "Certificates";

  constructor() { }

  ngOnInit() {
  }
  addCertificates() {
    this.certificateAddSwitch = "certificates-select";
    this.header = "Add 'Certificates' ";
  }

}
