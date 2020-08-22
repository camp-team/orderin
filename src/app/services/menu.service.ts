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
    this.db.doc<Menu>(`restaurants/${menu.restaurantId}/menus/${id}`).set({
      id,
      name: menu.name,
      imageUrl,
      description: menu.description,
      restaurantId: menu.restaurantId,
      isSoldout: menu.isSoldout,
      sizes: menu.sizes,
      toppings: menu.toppings,
      tags: menu.tags
    });
  }

  async updateMenu(menu: Menu) {
    if (menu.imageUrl) {
      console.log('image found');
      const image = await this.upload(menu.restaurantId, menu.id, menu.imageUrl);
      this.db.doc<Menu>(`restaurants/${menu.restaurantId}/menus/${menu.id}`).update({
        id: menu.id,
        name: menu.name,
        imageUrl: image,
        description: menu.description,
        restaurantId: menu.restaurantId,
        isSoldout: menu.isSoldout,
        sizes: menu.sizes,
        toppings: menu.toppings,
        tags: menu.tags
      });
    } else {
      console.log('image not found');
      this.db.doc(`restaurants/${menu.restaurantId}/menus/${menu.id}`).update({
        id: menu.id,
        name: menu.name,
        description: menu.description,
        restaurantId: menu.restaurantId,
        isSoldout: menu.isSoldout,
        sizes: menu.sizes,
        toppings: menu.toppings,
        tags: menu.tags
      });
    }
  }
}
