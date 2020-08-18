import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Restaurant } from '../interfaces/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(
    private db: AngularFirestore
  ) { }

  addRestaurant(restaurant: Restaurant) {
    this.db.doc(`restaurants/${restaurant.id}`).set(restaurant);
  }
}
