import { Component, OnInit } from '@angular/core';
import { CartItem } from 'app/models/cart-item.model';
import { Order, OrderItem } from 'app/models/order.model';
import { RadioOption } from 'app/models/radio-option.model';
import { OrderService } from 'app/services/order.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão Refeição', value: 'REF' }
  ];

  constructor(private orderService: OrderService) { }

  delivery: number = 8;

  ngOnInit() { }

  getItemsValue(): number {
    return this.orderService.getItemsValue();
  }

  getCartItems(): CartItem[] {
    return this.orderService.getCartItems();
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  checkOrder(order: Order) {
    order.orderItems = this.getCartItems()
      .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      console.log(`Compra concluída: ${orderId}`);
      this.orderService.clear();
    });
  }
}
