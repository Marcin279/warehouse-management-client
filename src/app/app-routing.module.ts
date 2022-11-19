import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PackageComponent} from "./component/package/package.component";
import {HomeComponent} from "./component/home/home.component";
import {NewPackageComponent} from "./component/new-package/new-package.component";
import {LoginComponent} from "./component/login/login.component";

const routes: Routes = [
  {path: 'packages', component: PackageComponent},
  {path: 'new-package', component: NewPackageComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
