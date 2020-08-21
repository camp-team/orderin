import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AddRestaurantsComponent } from '../develop/add-restaurants/add-restaurants/add-restaurants.component';

@Injectable({
  providedIn: 'root'
})
export class AddRestaurantGuard implements CanDeactivate<AddRestaurantsComponent> {
  canDeactivate(
    component: AddRestaurantsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (component.form.pristine || component.isComplete) {
        return true;
      }

      const confirmation = window.confirm('Your work will be lost. Is it okay?');

      return of(confirmation);
  }
}
