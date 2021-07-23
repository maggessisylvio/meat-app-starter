import { Injectable } from "@angular/core";
import { CartItem } from "app/models/cart-item.model";
import { ShoppingCartService } from "./shopping-cart.service";

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService) { }

    getItemsValue() {
        return this.cartService.total();
    }

    getCartItems(): CartItem[] {
        return this.cartService.items;
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item);
    }

    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item);
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item);
    }
}