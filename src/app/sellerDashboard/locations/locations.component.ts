import { Component, OnInit, ViewChild } from '@angular/core';
// declare const googlemaps: any;
import { } from 'googlemaps';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  @ViewChild('map') mapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {
    var myLatLng = { lat: 17.7278, lng: 83.2974 };
    const mapProperties = {
      center: new google.maps.LatLng(myLatLng),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: 'Macsof Technologies'
    });
  }


}
