import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Menu } from '../interfaces/menu';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuGetService {

  constructor(
    private db: AngularFirestore
  ) { }

  getMenu(restaurantId: string, id: string): Observable<Menu> {
    return this.db.doc<Menu>(`restaurants/${restaurantId}/menus/${id}`).valueChanges();
  }

  getMenus(restaurantId: string): Observable<Menu[]> {
    return this.db.collection<Menu>(`restaurants/${restaurantId}/menus`).valueChanges().pipe(
      map((menu: Menu[]) => {
        if (menu.length) {
          return menu;
        } else {
          return [];
        }
      })
    );
  }
}
