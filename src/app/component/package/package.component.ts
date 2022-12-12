import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PackageGetResponse} from "../../model/PackageGetResponse";

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  packages!: PackageGetResponse[];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.getPackages();
  }

  public getPackages() {
    this.httpClient.get<any>("http://127.0.0.1:8080/package/product")
      .subscribe(response => {
        this.packages = response.results;
        console.log(this.packages);
    }, error => {
        console.error("Error loading package list!");
      });
  }

  public setPackageStatus(status: string, packageId: number) {
    alert("Package status (" + status + ") has been saved!")

    // const postPackageStatus = {
    //   id: packageId,
    //   status: status
    // };
    //
    // this.httpClient.patch<any>("TODO", postPackageStatus)
    //   .subscribe(response => {
    //     console.log(response);
    //     this.getPackages();
    //   }, error => {
    //     console.error("TODO");
    //   });
  }
}
