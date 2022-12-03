import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackageComponent } from './component/package/package.component';
import { HomeComponent } from './component/home/home.component';
import {FormsModule} from "@angular/forms";
import { NewPackageComponent } from './component/new-package/new-package.component';
import { MenuComponent } from './component/menu/menu.component';
import { LoginComponent } from './component/login/login.component';
import { NewProductComponent } from './component/new-product/new-product.component';
import { RegisterComponent } from './component/register/register.component';
import { ShipmentDetailsComponent } from './component/shipment-details/shipment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PackageComponent,
    HomeComponent,
    NewPackageComponent,
    MenuComponent,
    LoginComponent,
    NewProductComponent,
    RegisterComponent,
    ShipmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
