import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Package} from "../../model/Package";
import {ProductStore} from "../../model/ProductStore";
import {ProductGetResponse} from "../../model/ProductGetResponse";
import {ShipmentDetailsGetResponse} from "../../model/ShipmentDetailsGetResponse";

@Component({
  selector: 'app-new-package',
  templateUrl: './new-package.component.html',
  styleUrls: ['./new-package.component.css']
})
export class NewPackageComponent implements OnInit {

  products!: ProductGetResponse[];
  shipmentDetails: ShipmentDetailsGetResponse[] = [];
  productStoreList: ProductStore[] = [];

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.getProducts();
    this.getShipmentDetails();
  }

  getProducts() {
    this.httpClient.get<any>("http://localhost:8080/product/")
      .subscribe(response => {
        this.products = response.results;
      });
  }

  getShipmentDetails() {
    this.httpClient.get<any>("http://localhost:8080/shipment/")
      .subscribe(response => {
        this.shipmentDetails = response.results;
      });
  }

  addNewProductStore(value: any) {

    const newProductStore = {
      product_name: value.product_name,
      quantity: value.quantity,
    } as ProductStore;

    this.productStoreList.push(newProductStore);

    alert("<" + newProductStore + "> has been added!");
  }

  async createNewPackage(formModel: any) {
    const newPackage = {
      package_name: formModel.package_name,
      package_type: formModel.package_type,
      sector: formModel.sector,
      status: formModel.status,
      product_store: this.productStoreList,
      shipment_name: formModel.shipment_name
    } as Package;

    if(newPackage.sector >= 100) {
      console.error("Enter the valid data again!")
      alert("Enter the valid data again!");
      window.location.reload();
    }

    this.httpClient.post<Package>("http://localhost:8080/package/product/", newPackage)
      .toPromise()
      .then(
        response => {
          console.log(response);
          alert("<" + newPackage.package_name + "> has been saved!");
          window.location.reload();
        })
      .catch(() => {
          console.error("Enter the valid data again!")
          alert("Enter the valid data again!");
          window.location.reload();
        }
      );
  }
}
