import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PackageComponent} from "./component/package/package.component";

const routes: Routes = [
  {path: 'package', component: PackageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
