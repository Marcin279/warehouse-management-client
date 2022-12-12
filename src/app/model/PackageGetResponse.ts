import {ProductStoreGetResponse} from "./ProductStoreGetResponse";
import {ShipmentDetailsGetResponse} from "./ShipmentDetailsGetResponse";

export interface PackageGetResponse {
  id: number
  package_name: string
  package_type: string
  qr_code: string
  addition_date: string
  sector: number
  status: string
  product_store: ProductStoreGetResponse[]
  shipment_details: ShipmentDetailsGetResponse
}
