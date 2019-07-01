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

  onCheckSegmentGroup(segment) {
    /* if (this.segmentedGroups.length > 0) {
      for (var i = 0; i < this.segmentedGroups.length; i++){
        if (this.segmentedGroups[i].categoryId === segment.categoryId) {
          this.productGroups = segment.
        }
      }
} */

    this.productGroups = segment.subCategory;
  }
}
