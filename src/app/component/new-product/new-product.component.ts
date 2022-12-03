import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../model/Product";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {

  }

  async createNewProduct(formModel: any) {
    const newProduct = {
      product_name: formModel.product_name,
      product_type: formModel.product_type,
      category: formModel.category
    } as Product;

    this.httpClient.post<Product>("http://127.0.0.1:8080/product/", newProduct)
      .toPromise()
      .then(response => {
          console.log(response);
          alert("Product with name: <" + newProduct.product_name + "> has been saved!");
          window.location.reload();
        }
      )
      .catch(() => {
          console.error("Enter the valid data again!")
          alert("Enter the valid data again!");
          window.location.reload();
        }
      );
  }
}
