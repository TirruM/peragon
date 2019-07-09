import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  addMaterialsSwitch : String = "noMaterials";
  materialListSwitch : String = "addMaterials";

  addFabricTypesSwitch : String = "noFabricTypes";
  fabricTypeListSwitch : String = "addFabricTypes";
  addProductFeatureSwitch : String = "addFeature";
  constructor() { }

  ngOnInit() {
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
  
  addProductFeature(){
    this.addProductFeatureSwitch = "addNewProductFeature";
  }
}
