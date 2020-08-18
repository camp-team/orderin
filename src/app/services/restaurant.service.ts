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

  addRestaurant(restaurant: Omit<Restaurant, 'id'>) {
    const id = this.db.createId();
    this.db.doc<Restaurant>(`restaurants/${id}`).set({
      id,
      address: restaurant.address,
      image: restaurant.image,
      name: restaurant.name,
      openTime: restaurant.openTime,
      closeTime: restaurant.closeTime,
      description: restaurant.description,
      tags: restaurant.tags
    });
  }
}
