import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Package} from "../../model/Package";

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  packages!: Package[];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.getPackages();
  }

  public getPackages() {
    this.httpClient.get<Package[]>("http://localhost:8080/package/")
      .subscribe(response => {
        this.packages = response;
    }, error => {
        console.error("Error loading package list!");
      });
  }
}
