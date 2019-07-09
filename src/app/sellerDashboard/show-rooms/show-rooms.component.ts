import { Component, OnInit } from '@angular/core';
import { AddProductModelComponent } from './../add-product-model/add-product-model.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { isEmpty } from "lodash";
@Component({
  selector: 'app-show-rooms',
  templateUrl: './show-rooms.component.html',
  styleUrls: ['./show-rooms.component.scss']
})
export class ShowRoomsComponent implements OnInit {
  closeResult: string;
  modalReference: any;
  productObj: any = {};
  isNotFilled: boolean = true;
  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  // class: 'modal-lg modal-size modal-dialog-centered',
  onShowAddProduct() {
    this.modalRef = this.modalService.show(AddProductModelComponent,
      { ignoreBackdropClick: true, keyboard: false });
    this.modalRef.setClass('custom');

    this.modalService.onHide.subscribe(() => {
      if (!isEmpty(this.modalRef.content.modalObject)) {
        this.productObj = this.modalRef.content.modalObject;
        this.isNotFilled = false;
      } else {
        this.productObj = {};
        this.isNotFilled = true;
      }
    })
  }

}
