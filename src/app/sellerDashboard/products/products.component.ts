import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';

export interface Fruit {
  name: string;
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  addMaterialsSwitch: String = "noMaterials";
  materialListSwitch: String = "addMaterials";

  addFabricTypesSwitch: String = "noFabricTypes";
  fabricTypeListSwitch: String = "addFabricTypes";
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = false;

  separatorKeysCodes = [ENTER, COMMA];

  productDetails = [];
  /* ng-select */

  users = [
    { id: 'anjmao', name: 'Anjmao' },
    { id: 'varnas', name: 'Tadeus Varnas' }
  ];


  /* ng-select */

  fruitCtrl = new FormControl();

  filteredFruits: Observable<any[]>;

  allFruits = [];

  fruits = [];
  addProductFeatureSwitch: String = "addFeature";//"";


  @ViewChild('fruitInput') fruitInput: ElementRef;

  selectedUserIds: number[];
  constructor() {
    // this.create10kCities();
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this.filter(fruit) : this.allFruits.slice()));
  }

  ngOnInit() {

    this.productDetails = [
      {
        "id": 1,
        "name": "Mens-LG-smart Jersey",
        "quantiy": "501-1000",
        "leadTime": "60days",
        "feature": [
          {
            "featureId": 1,
            "feateureName": "feature1"
          },
          {
            "featureId": 2,
            "feateureName": "feature2"
          },
          {
            "featureId": 3,
            "feateureName": "feature3"
          }
        ]
      },
      {
        "id": 2,
        "name": "Mens-Med- smartJersey",
        "quantiy": "30-3000",
        "leadTime": "60days",
        "feature": [
          {
            "featureId": 1,
            "feateureName": "Medfeature1"
          },
          {
            "featureId": 2,
            "feateureName": "Medfeature2"
          },
          {
            "featureId": 3,
            "feateureName": "Medfeature3"
          }
        ]
      },
      {
        "id": 3,
        "name": "Kids- Football smartsole",
        "quantiy": "20-200",
        "leadTime": "60days",
        "feature": [
          {
            "featureId": 1,
            "feateureName": "football1"
          },
          {
            "featureId": 2,
            "feateureName": "football2"
          },
          {
            "featureId": 3,
            "feateureName": "football3"
          }
        ]
      }
    ]
  }

  clikcProdcutFeature(prod){
    this.allFruits = [];
     if(prod.feature.length > 0){
       for (let i = 0; i < prod.feature.length; i++) {
          this.allFruits.push(prod.feature[i]['feateureName']);
       }
      
     }
  }

  addCustomUser = (term) => ({ id: term, name: term });



  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    console.log(this.fruits);
  }

  remove(fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }


  filter(name: string) {
    return this.allFruits.filter(fruit =>
      fruit.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  addMaterials() {
    this.addMaterialsSwitch = "addMaterials";
  }

  saveMaterials() {
    this.addMaterialsSwitch = "";
    this.materialListSwitch = "materialsDetails";
  }

  addFabricTypes() {
    this.addFabricTypesSwitch = "addFabricTypes";
  }

  saveFabricTypes() {
    this.addFabricTypesSwitch = "";
    this.fabricTypeListSwitch = "fabricTypeDetails";
  }

  addProductFeature() {
    this.addProductFeatureSwitch = "addNewProductFeature";
  }
}
