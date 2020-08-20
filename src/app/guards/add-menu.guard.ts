import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AddMenuComponent } from '../develop/add-menu/add-menu/add-menu.component';

@Injectable({
  providedIn: 'root'
})
export class AddMenuGuard implements CanDeactivate<AddMenuComponent> {
  canDeactivate(
    component: AddMenuComponent,
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
