import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Restaurant } from '../interfaces/restaurant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantGetService {

  constructor(
    private db: AngularFirestore
  ) { }

  getRestaurant(id: string): Observable<Restaurant> {
    return this.db.doc<Restaurant>(`restaurants/${id}`).valueChanges();
  }

  getRestaurants(): Observable<Restaurant[]> {
    return this.db.collection<Restaurant>(`restaurants`).valueChanges();
  }
}
