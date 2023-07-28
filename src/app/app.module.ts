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
import {RouterModule} from "@angular/router";
import {ProductsModule} from "./feature/products/products.module";
import {OrderModule} from "./feature/order/order.module";
import {MainModule} from "./feature/main/main.module";

registerLocaleData(localeRu, 'ru')

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    ProductsModule,
    OrderModule,
    MainModule,
    NgbModule,
    SharedModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
