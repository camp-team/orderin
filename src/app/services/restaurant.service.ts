import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Restaurant } from '../interfaces/restaurant';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) { }

  private async upload(id: string, base64: string): Promise<string> {
    const time: number = new Date().getTime();
    const ref = this.storage.ref(`restaurants/${id}/images/${time}`);
    const result = await ref.putString(base64, 'data_url');
    return result.ref.getDownloadURL();
  }

  async addRestaurant(restaurant: Omit<Restaurant, 'id'>) {
    const id = this.db.createId();
    const image = await this.upload(id, restaurant.image);
    this.db.doc<Restaurant>(`restaurants/${id}`).set({
      id,
      address: restaurant.address,
      phoneNumber: restaurant.phoneNumber,
      image,
      name: restaurant.name,
      openTime: restaurant.openTime,
      closeTime: restaurant.closeTime,
      description: restaurant.description,
      tags: restaurant.tags
    });
  }

  async updateRestaurant(restaurant: Restaurant) {
    if (restaurant.image) {
      console.log('image found');
      const image = await this.upload(restaurant.id, restaurant.image);
      this.db.doc<Restaurant>(`restaurants/${restaurant.id}`).set({
        id: restaurant.id,
        address: restaurant.address,
        phoneNumber: restaurant.phoneNumber,
        image,
        name: restaurant.name,
        openTime: restaurant.openTime,
        closeTime: restaurant.closeTime,
        description: restaurant.description,
        tags: restaurant.tags
      });
    } else {
      console.log('image not found');
      this.db.doc(`restaurants/${restaurant.id}`).update({
        id: restaurant.id,
        address: restaurant.address,
        phoneNumber: restaurant.phoneNumber,
        name: restaurant.name,
        openTime: restaurant.openTime,
        closeTime: restaurant.closeTime,
        description: restaurant.description,
        tags: restaurant.tags
      });
    }
  }
}
