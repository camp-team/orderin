import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Menu } from '../interfaces/menu';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) { }

  private async upload(restaurantId: string, id: string, base64: string): Promise<string> {
    const time: number = new Date().getTime();
    const ref = this.storage.ref(`restaurants/${restaurantId}/menu/${id}`);
    const result = await ref.putString(base64, 'data_url');
    return result.ref.getDownloadURL();
  }

  async addMenu(menu: Omit<Menu, 'id'>) {
    const id = this.db.createId();
    const imageUrl = await this.upload(menu.restaurantId, id, menu.imageUrl);
    this.db.doc(`restaurants/${menu.restaurantId}/menus/${id}`).set({
      id,
      name: menu.name,
      price: menu.price,
      imageUrl,
      description: menu.description,
      restaurantId: menu.restaurantId,
      tags: menu.tags
    });
  }
}
