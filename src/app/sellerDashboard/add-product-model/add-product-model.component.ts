import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { PerogonServices } from 'src/app/services/perogon-services.service';
@Component({
  selector: 'app-add-product-model',
  templateUrl: './add-product-model.component.html',
  styleUrls: ['./add-product-model.component.scss']
})
export class AddProductModelComponent implements OnInit {
  public onClose: Subject<boolean>;
  segmentedGroups: any;
  productGroups: any;
  imageUpload_0: string | ArrayBuffer="";
  imageUpload_1: string | ArrayBuffer;
  imageUpload_2: string | ArrayBuffer;
  imageUpload_3: string | ArrayBuffer;

  modalObject = {};
  productTitle: string;
  productDesc: string;

  constructor(private _bsModalRef: BsModalRef, private services: PerogonServices) {
  }

  public ngOnInit(): void {
    this.services.getJSON().subscribe((response: any) => {
      this.segmentedGroups = response.data;
    });
    this.onClose = new Subject();
  }

  public onCloseBtn(): void {
    this.modalObject = {
      imageUpload_0 : this.imageUpload_0,
      imageUpload_1: this.imageUpload_1,
      imageUpload_2: this.imageUpload_2,
      title: this.productTitle,
      description: this.productDesc
    }
    this._bsModalRef.hide();    
  }

  onCheckSegmentGroup(segment) {


    this.productGroups = segment.subCategory;
  }

  public onImageUpload(eve, val) {
    console.log("files", eve);
    if (eve.target.files && eve.target.files[0]) {
      let fileReader = new FileReader();
      fileReader.readAsDataURL(eve.target.files[0]);
      fileReader.onload = (event) => {
        // console.log("reader image", event);
        if (val === 0) {
        
          this.imageUpload_0 = fileReader.result;
        } else if (val === 1) {
          this.imageUpload_1 = fileReader.result;
        } else if (val === 2) {
          this.imageUpload_2 = fileReader.result;
        } else if (val === 3) {
          this.imageUpload_3 = fileReader.result;
        }

      }
    }
  }

  public onCancel() {
    this._bsModalRef.hide();
  }

}
