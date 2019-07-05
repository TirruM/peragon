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
  imageUpload: any;

  constructor(private _bsModalRef: BsModalRef, private services: PerogonServices) {
  }

  public ngOnInit(): void {
    this.services.getJSON().subscribe((response: any) => {
      this.segmentedGroups = response.data;
      console.log("perogon categories----->" + JSON.stringify(this.segmentedGroups));

    });
    this.onClose = new Subject();
  }

  public onConfirm(): void {
    this.onClose.next(true);
    this._bsModalRef.hide();
  }

  public onCancel(): void {
    this.onClose.next(false);
    this._bsModalRef.hide();
  }
  public onCloseBtn(): void {
    this._bsModalRef.hide();
  }

  onCheckSegmentGroup(segment) {
    

    this.productGroups = segment.subCategory;
  }

  public onImageUpload(e) {
    console.log("files", e);
    if(e.target.files && e.target.files[0]) {
      let fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.onload = (event) => {
        console.log("reader image", event);
        // this.imageUpload = event.target.result;
      }
    }
  }

  onCheck() {
    alert("checking");
  }
}
