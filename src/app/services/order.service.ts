import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../interfaces/order';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private db: AngularFirestore
  ) { }

  order(uid: string, order: Omit<Order, 'id'>): void {
    this.db.collection<Order>(`orders`, (ref) => ref.where('orderingUserId', '==', uid).where('isPaid', '==', false)).valueChanges()
      .pipe(
        map((orders: Order[]) => {
          if (!orders.length) {
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
          } else {
            return true;
          }
        })
      );
  }

  cancelOrder(id: string) {
    this.db.doc(`orders/${id}`).delete();
  }
}
