import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {HttpClient} from "@angular/common/http";
import {ProductsService} from "../../../core/services/products.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {

  public products: ProductType[] = [];
  subscription: Subscription | null = null;

  constructor(private http: HttpClient,
              private productsService: ProductsService,
              private route: Router) {
  }


  ngOnInit() {
    this.subscription = this.productsService.getProducts()
      .subscribe({
        next: data => {
          this.products = data;
        },
        error: err => {
          console.log(err);
          this.route.navigate(['/'])
        }
      });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }

}
