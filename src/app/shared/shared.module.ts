import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {AnswersComponent} from "./answer/answers.component";
import {ProductCardComponent} from "./product-card/product-card.component";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AnswersComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [
    AnswersComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent
  ]
})
export class SharedModule { }
