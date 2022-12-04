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
    this.httpClient.get<any>("http://localhost:8080/package/")
      .subscribe(response => {
        this.packages = response.results;
    }, error => {
        console.error("Error loading package list!");
      });
  }
}
