import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsModule} from "./products/products.module";
import {MainModule} from "./main/main.module";
import {OrderModule} from "./order/order.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductsModule,
    MainModule,
    OrderModule
  ]
})
export class FeatureModule { }
