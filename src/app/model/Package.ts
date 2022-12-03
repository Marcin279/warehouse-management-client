import {ProductStore} from "./ProductStore";

export interface Package {
  package_name: string
  package_type: string
  sector: number
  status: string
  product_store: ProductStore[]
  shipment_name: string
}
