import { Component, OnInit } from '@angular/core';
import { AddProductModelComponent } from './../add-product-model/add-product-model.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.scss']
})
export class SellerProfileComponentt implements OnInit {
  selectedTab: any;
  profileStrength: String = 'Starter';
  isShowData: boolean = false;
  isShowExportCountries: boolean = false;
  closeResult: string;
  modalReference: any;
  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
    this.selectedTab = '0';
  }

  ngOnInit() {
  }

  onTabClick(currentTab) {
    this.selectedTab = currentTab;
  }

  onShowAddProduct() {
    this.modalRef = this.modalService.show(AddProductModelComponent, { class: 'modal-lg modal-dialog-centered', ignoreBackdropClick: true, keyboard: false });
    this.modalRef.content.onClose.subscribe(result => {
      console.log('results', result);
    })
  }


}

