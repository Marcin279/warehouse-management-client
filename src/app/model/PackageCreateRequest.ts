//TODO added
import {Product} from "./Product";

export interface PackageCreateRequest {
  package_type: string
  destination: string
  approval_date: string   //TODO -> change admition_date to approval_date in API
  products: Product[]
}
