import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {registerLocaleData} from "@angular/common";
import localeRu from "@angular/common/locales/ru";
import {ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from "./shared/shared.module";
import {FeatureModule} from "./feature/feature.module";
import {MainRoutingModule} from "./feature/main/main-routing.module";
import {ProductsRoutingModule} from "./feature/products/products-routing.module";
import {OrderRoutingModule} from "./feature/order/order-routing.module";
import {AnswersComponent} from "./shared/answer/answers.component";

registerLocaleData(localeRu, 'ru')

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule,
    FeatureModule,
    MainRoutingModule,
    ProductsRoutingModule,
    OrderRoutingModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
