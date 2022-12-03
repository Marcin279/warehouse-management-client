import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PackageComponent} from "./component/package/package.component";
import {HomeComponent} from "./component/home/home.component";
import {NewPackageComponent} from "./component/new-package/new-package.component";
import {LoginComponent} from "./component/login/login.component";
import {NewProductComponent} from "./component/new-product/new-product.component";
import {RegisterComponent} from "./component/register/register.component";
import {ShipmentDetailsComponent} from "./component/shipment-details/shipment-details.component";

const routes: Routes = [
  {path: 'packages', component: PackageComponent},
  {path: 'new-package', component: NewPackageComponent},
  {path: 'new-product', component: NewProductComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'shipment-details', component: ShipmentDetailsComponent},
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
