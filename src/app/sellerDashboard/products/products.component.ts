import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
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

  fruitCtrl = new FormControl();

  filteredFruits: Observable<any[]>;

  fruits = [
    'Lemon',
  ];

  allFruits = [
    'Apple',
    'Lemon',
    'Lime',
    'Orange',
    'Strawberry'
  ];

  @ViewChild('fruitInput') fruitInput: ElementRef;


  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this.filter(fruit) : this.allFruits.slice()));
  }

  ngOnInit() {
  }


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
}
