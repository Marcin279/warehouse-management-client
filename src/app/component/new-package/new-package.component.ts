import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Package} from "../../model/Package";

@Component({
  selector: 'app-new-package',
  templateUrl: './new-package.component.html',
  styleUrls: ['./new-package.component.css']
})
export class NewPackageComponent implements OnInit {

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {

  }

  async createNewPackage(formModel: any) {
    const newPackage = {
      packageType: formModel.packageType,
      qrCodeno: formModel.qrCodeno,
      admitionDate: formModel.admitionDate,
      destination: formModel.destination
    } as Package;

    this.httpClient.post<Package>("http://localhost:8080/package/", newPackage)
      .toPromise()
      .then(response => console.log(response))
      .catch(() => console.error("Enter the valid data again!"));
  }
}
