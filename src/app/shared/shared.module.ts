import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {AnswersComponent} from "./answer/answers.component";
import {ProductCardComponent} from "./product-card/product-card.component";
import {RouterLink, RouterLinkActive, RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AnswersComponent,
    ProductCardComponent
  ],
  exports: [
    AnswersComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
