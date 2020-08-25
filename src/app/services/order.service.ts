import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private db: AngularFirestore
  ) { }

  order(order: Omit<Order, 'id'>): void {
    const id = this.db.createId();
    this.db.doc<Order>(`orders/${id}`).set({
      id,
      orderingUserId: order.orderingUserId,
      menuId: order.menuId,
      restaurantId: order.restaurantId,
      size: order.size,
      toppings: order.toppings,
      quantity: order.quantity,
      sum: order.sum,
      isPaid: order.isPaid,
      isComplete: order.isComplete
    });
  }
}
