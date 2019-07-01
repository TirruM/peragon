import { Component, OnInit } from '@angular/core';
import { AddProductModelComponent } from './../add-product-model/add-product-model.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-show-rooms',
  templateUrl: './show-rooms.component.html',
  styleUrls: ['./show-rooms.component.scss']
})
export class ShowRoomsComponent implements OnInit {
  closeResult: string;
  modalReference: any;
  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }


  onShowAddProduct() {
    this.modalRef = this.modalService.show(AddProductModelComponent, { class: 'modal-lg modal-dialog-centered', ignoreBackdropClick: true, keyboard: false });
    this.modalRef.content.onClose.subscribe(result => {
      console.log('results', result);
    })
  }

}
