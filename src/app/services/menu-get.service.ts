import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Menu } from '../interfaces/menu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuGetService {

  constructor(
    private db: AngularFirestore
  ) { }

  getMenu(restaurantId: string, id: string): Observable<Menu> {
    return this.db.doc<Menu>(`restaurant/${restaurantId}/menus/${id}`).valueChanges();
  }

  getMenus(restaurantId: string): Observable<Menu[]> {
    return this.db.collection<Menu>(`restaurant/${restaurantId}/menus`).valueChanges();
  }
}
