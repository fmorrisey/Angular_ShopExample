import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];
  constructor(private http: HttpClient){}

  // Appends to the cart array
  addToCart(product) {
    this.items.push(product);
  }
  //returns the array
  getItems() {
    return this.items;
  }
  //clears the array
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>
    ('/assets/shipping.json');
  }
}
