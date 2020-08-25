import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../interfaces/order';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderGetService {

  constructor(
    private db: AngularFirestore
  ) { }

  getCart(uid: string): Observable<Order[]> {
    return this.db.collection<Order>(`orders`, (ref) => ref.where('orderingUserId', '==', uid).where('isPaid', '==', false)).valueChanges()
    .pipe(
      map((orders: Order[]) => {
        if (orders.length) {
          return orders;
        } else {
          return [];
        }
      })
    );
  }

  getOrderHistory(uid: string) {
    return this.db.collection<Order>(`orders`, (ref) => ref.where('orderingUserId', '==', uid).where('isPaid', '==', true)).valueChanges()
    .pipe(
      map((orders: Order[]) => {
        if (orders.length) {
          return orders;
        } else {
          return [];
        }
      })
    );
  }

  getOrdersForRestaurant(restaurantId: string) {
    return this.db.collection<Order>(`orders`, (ref) => ref.where('restaurantId', '==', restaurantId).where('isPaid', '==', true)).valueChanges()
    .pipe(
      map((orders: Order[]) => {
        if (orders.length) {
          return orders;
        } else {
          return [];
        }
      })
    );
  }

}
