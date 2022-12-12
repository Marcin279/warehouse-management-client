import {ProductStoreDetailsResponse} from "./ProductStoreDetailsResponse";

export interface ProductStoreGetResponse {
  product: ProductStoreDetailsResponse
  date_creation: string
  quantity: string
}
