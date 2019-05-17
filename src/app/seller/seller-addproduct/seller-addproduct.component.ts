import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-addproduct',
  templateUrl: './seller-addproduct.component.html',
  styleUrls: ['./seller-addproduct.component.scss']
})
export class SellerAddproductComponent implements OnInit {
  productForm: FormGroup;
  urls = [];

  constructor(private fb: FormBuilder, private router: Router) {
    this.createProduct(fb);
  }

  ngOnInit() {
  }

  public createProduct(fb) {
    this.productForm = fb.group({
      'title': [null, Validators.required],
      'productname': [null, Validators.required],
      'description': [null],
      'quantity': [null],
      'price': [null],
      'code': [null],
    });
  }

  public submitPostaJobForm(form) {
    alert("product added successfullyyy");
    localStorage.setItem("manufacturelogin_flag", "1");
    this.router.navigateByUrl("/seMyproducts");
  }



  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event) => {
          // console.log(event.target.result);
          //this.urls.push(event.target.result);
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

}
