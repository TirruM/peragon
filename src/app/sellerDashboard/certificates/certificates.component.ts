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

  viewCertificateSwitch: String = "add-certificates";

  constructor() { }

  ngOnInit() {
  }
  addCertificates() {
    this.certificateAddSwitch = "certificates-select";
    this.header = "Add 'Certificates' ";
  }

  addGots(){
    this.certificateAddSwitch = "gots-select";
    this.header = 'Add "GOTS"- Global Organic Textile Standard';
  }

  viewCertificates(){
    this.header = 'Certificates';
    this.certificateAddSwitch = "add-certificates";
    this.viewCertificateSwitch = "view-certificate" ;
  }
}
