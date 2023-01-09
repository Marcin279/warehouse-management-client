import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ShipmentDetails} from "../../model/ShipmentDetails";

@Component({
  selector: 'app-shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrls: ['./shipment-details.component.css']
})
export class ShipmentDetailsComponent {

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {

  }

  async createNewShipmentDetails(formModel: any) {

    const newShipmentDetails = {
      shipment_name: formModel.shipment_name,
      buildings_number: formModel.buildings_number,
      street: formModel.street,
      postal_code: formModel.postal_code,
      city: formModel.city,
      country: formModel.country
      // total_weight: formModel.total_weight
    } as ShipmentDetails;

    this.httpClient.post<ShipmentDetails>("http://127.0.0.1:8080/shipment/", newShipmentDetails)
      .toPromise()
      .then(response => {
        console.log(response);
        alert(newShipmentDetails.shipment_name + " has been saved!");
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
